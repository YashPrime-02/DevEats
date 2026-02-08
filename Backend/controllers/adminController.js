const pool = require("../config/db");
const db = require("../models");

// 👥 Get All Users (Admin)
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

// 📦 Get All Orders (Admin)
exports.getOrders = async (req, res, next) => {
  try {
    const result = await pool.query(
      `
      SELECT o.id, u.email, o.total_amount, o.status, o.created_at
      FROM orders o
      JOIN users u ON o.user_id = u.id
      ORDER BY o.created_at DESC
      `
    );

    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

// 💰 Total Revenue (Admin)
exports.getRevenue = async (req, res, next) => {
  try {
    const result = await pool.query(
      "SELECT COALESCE(SUM(total_amount), 0) AS revenue FROM orders"
    );

    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

// 📩 Get All Contacts (Admin)
exports.getContacts = async (req, res, next) => {
  try {
    const result = await pool.query(
      `
      SELECT id, name, email, message, created_at
      FROM contacts
      ORDER BY created_at DESC
      `
    );

    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};
