const pool = require("../config/db");

// 🧾 PLACE ORDER
exports.placeOrder = async (req, res, next) => {
  const client = await pool.connect();

  try {
    const userId = req.user.id;

    await client.query("BEGIN");

    // 1️⃣ Get active cart
    const cartResult = await client.query(
      "SELECT id FROM carts WHERE user_id=$1 AND status='active'",
      [userId]
    );

    if (cartResult.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No active cart found",
      });
    }

    const cartId = cartResult.rows[0].id;

    // 2️⃣ Get cart items
    const itemsResult = await client.query(
      "SELECT * FROM cart_items WHERE cart_id=$1",
      [cartId]
    );

    if (itemsResult.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }

    const items = itemsResult.rows;

    // 3️⃣ Calculate total
    const totalAmount = items.reduce(
      (sum, item) => sum + Number(item.price) * Number(item.quantity),
      0
    );

    // 4️⃣ Create order
    const orderResult = await client.query(
      `
      INSERT INTO orders (user_id, total_amount, status)
      VALUES ($1, $2, 'placed')
      RETURNING id, total_amount, status, created_at
      `,
      [userId, totalAmount]
    );

    const orderRow = orderResult.rows[0];
    const orderId = orderRow.id;

    // 5️⃣ Copy items into order_items
    for (const item of items) {
      await client.query(
        `
        INSERT INTO order_items
          (order_id, external_item_id, name, price, image_url, quantity)
        VALUES
          ($1,$2,$3,$4,$5,$6)
        `,
        [
          orderId,
          item.external_item_id,
          item.name,
          item.price,
          item.image_url,
          item.quantity,
        ]
      );
    }

    // 6️⃣ Mark cart converted
    await client.query(
      "UPDATE carts SET status='converted' WHERE id=$1",
      [cartId]
    );

    await client.query("COMMIT");

    res.json({
      success: true,
      message: "Order placed successfully",
      order: {
        id: orderId,
        total_amount: orderRow.total_amount,
        status: orderRow.status,
        created_at: orderRow.created_at,
      },
    });
  } catch (err) {
    await client.query("ROLLBACK");
    next(err);
  } finally {
    client.release();
  }
};

// 📜 GET USER ORDERS
exports.getOrders = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const result = await pool.query(
      `
      SELECT id, total_amount, status, created_at
      FROM orders
      WHERE user_id = $1
      ORDER BY created_at DESC
      `,
      [userId]
    );

    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

// 📦 GET ORDER DETAIL
exports.getOrderById = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const orderId = req.params.id;

    const result = await pool.query(
      `
      SELECT o.id, o.total_amount, o.status, o.created_at,
             oi.id as order_item_id,
             oi.external_item_id, oi.name, oi.price, oi.image_url, oi.quantity
      FROM orders o
      JOIN order_items oi ON o.id = oi.order_id
      WHERE o.user_id = $1 AND o.id = $2
      ORDER BY oi.id DESC
      `,
      [userId, orderId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};
