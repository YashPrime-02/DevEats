const pool = require("../config/db");

console.log("🔥 USING CART CONTROLLER (LATEST)");

exports.addToCart = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { external_item_id, name, price, image_url, quantity } = req.body;

    console.log("📦 ADD TO CART HIT");
    console.log("➡️ Payload:", { external_item_id, name, price, image_url, quantity });

    if (!external_item_id || !name || price === undefined || !quantity) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    if (Number(quantity) < 1) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be at least 1",
      });
    }

    // 🔥 DEBUG DB STRUCTURE (CRITICAL)
    const debugCols = await pool.query(`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name='cart_items'
    `);
    console.log("🧠 DB columns:", debugCols.rows);

    // 1️⃣ Get or create active cart
    const cartQuery = await pool.query(
      "SELECT id FROM public.carts WHERE user_id = $1 AND status = 'active'",
      [userId]
    );

    let cartId;

    if (cartQuery.rows.length === 0) {
      const newCart = await pool.query(
        "INSERT INTO public.carts (user_id, status) VALUES ($1, 'active') RETURNING id",
        [userId]
      );
      cartId = newCart.rows[0].id;
    } else {
      cartId = cartQuery.rows[0].id;
    }

    // 2️⃣ Check if item exists
    const itemCheck = await pool.query(
      "SELECT id, quantity FROM public.cart_items WHERE cart_id=$1 AND external_item_id=$2",
      [cartId, external_item_id]
    );

    if (itemCheck.rows.length > 0) {
      console.log("🔁 Updating existing item");

      await pool.query(
        "UPDATE public.cart_items SET quantity = quantity + $1 WHERE id=$2",
        [quantity, itemCheck.rows[0].id]
      );
    } else {
      console.log("🆕 Inserting new item");

      // 🔥 SAFE INSERT (NO COLUMN MISMATCH POSSIBLE)
      await pool.query(
        `
        INSERT INTO public.cart_items
        (cart_id, external_item_id, quantity, name, price, image_url)
        VALUES ($1,$2,$3,$4,$5,$6)
        `,
        [
          cartId,
          external_item_id,
          quantity,
          name,
          price,
          image_url || null,
        ]
      );
    }

    res.json({ success: true, message: "Item added to cart" });
  } catch (err) {
    console.error("🔥 ADD TO CART ERROR:", err);
    next(err);
  }
};

// 📦 GET CART
exports.getCart = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const cartRes = await pool.query(
      "SELECT id FROM public.carts WHERE user_id = $1 AND status='active'",
      [userId]
    );

    if (cartRes.rows.length === 0) {
      return res.json([]);
    }

    const cartId = cartRes.rows[0].id;

    const itemsRes = await pool.query(
      `
      SELECT id, external_item_id, name, price, image_url, quantity
      FROM public.cart_items
      WHERE cart_id = $1
      ORDER BY id DESC
      `,
      [cartId]
    );

    res.json(itemsRes.rows);
  } catch (err) {
    next(err);
  }
};

// ❌ REMOVE ITEM
exports.removeItem = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const itemId = req.params.id;

    const result = await pool.query(
      `
      DELETE FROM public.cart_items ci
      USING public.carts c
      WHERE ci.id = $1
        AND ci.cart_id = c.id
        AND c.user_id = $2
        AND c.status = 'active'
      `,
      [itemId, userId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found",
      });
    }

    res.json({ success: true, message: "Item removed" });
  } catch (err) {
    next(err);
  }
};