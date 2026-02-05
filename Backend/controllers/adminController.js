const pool = require("../config/db");
const db = require("../models");



// 👥 Get All Users
exports.getUsers = async (req, res, next) => {
  try {
    const users = await db.User.findAll({
      attributes: ["id", "name", "email", "role", "created_at"],
      order: [["created_at", "DESC"]],
    });

    res.json(users);
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

// 📋 Get All Orders (Admin)
exports.getAllOrders = async (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Forbidden" });
    }

    const result = await pool.query(`
      SELECT o.id, o.total_amount, o.status, o.created_at,
             u.email
      FROM orders o
      JOIN users u ON o.user_id = u.id
      ORDER BY o.created_at DESC
    `);

    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};
