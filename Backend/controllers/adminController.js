const pool = require("../config/db");

// 👥 Get All Users
exports.getUsers = async (req, res, next) => {
  try {
    const result = await pool.query(
      "SELECT id, name, email, role, created_at FROM users ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

// 📦 Get All Orders
exports.getOrders = async (req, res, next) => {
  try {
    const result = await pool.query(
      `SELECT o.id, u.email, o.total_amount, o.status, o.created_at
       FROM orders o
       JOIN users u ON o.user_id = u.id
       ORDER BY o.created_at DESC`
    );
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

// 💰 Total Revenue
exports.getRevenue = async (req, res, next) => {
  try {
    const result = await pool.query(
      "SELECT SUM(total_amount) AS revenue FROM orders"
    );
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};
