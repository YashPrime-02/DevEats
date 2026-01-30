const pool = require("../config/db");

// ➕ ADD TO CART
exports.addToCart = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { external_item_id, name, price, image_url, quantity } = req.body;

    console.log("🛒 Add to cart:", external_item_id);

    // 1️⃣ Get or create cart
    let cartQuery = await pool.query(
      "SELECT id FROM carts WHERE user_id = $1 AND status = 'active'",
      [userId]
    );

    let cartId;

    if (cartQuery.rows.length === 0) {
      const newCart = await pool.query(
        "INSERT INTO carts (user_id) VALUES ($1) RETURNING id",
        [userId]
      );
      cartId = newCart.rows[0].id;
    } else {
      cartId = cartQuery.rows[0].id;
    }

    // 2️⃣ Check if item exists
    const itemCheck = await pool.query(
      "SELECT * FROM cart_items WHERE cart_id=$1 AND external_item_id=$2",
      [cartId, external_item_id]
    );

    if (itemCheck.rows.length > 0) {
      await pool.query(
        "UPDATE cart_items SET quantity = quantity + $1 WHERE id=$2",
        [quantity, itemCheck.rows[0].id]
      );
    } else {
      await pool.query(
        `INSERT INTO cart_items
        (cart_id, external_item_id, name, price, image_url, quantity)
        VALUES ($1,$2,$3,$4,$5,$6)`,
        [cartId, external_item_id, name, price, image_url, quantity]
      );
    }

    res.json({ success: true, message: "Item added to cart" });
  } catch (err) {
    next(err);
  }
};

// 📦 GET CART
exports.getCart = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const result = await pool.query(`
      SELECT ci.*
      FROM carts c
      JOIN cart_items ci ON c.id = ci.cart_id
      WHERE c.user_id = $1 AND c.status='active'
    `, [userId]);

    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

// ❌ REMOVE ITEM
exports.removeItem = async (req, res, next) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM cart_items WHERE id=$1", [id]);

    res.json({ success: true, message: "Item removed" });
  } catch (err) {
    next(err);
  }
};
