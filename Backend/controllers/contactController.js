const pool = require("../config/db");

// 📩 CREATE CONTACT MESSAGE
const createContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (name.trim().length < 3) {
      return res.status(400).json({
        success: false,
        message: "Name must be at least 3 characters",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid email",
      });
    }

    if (message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        message: "Message must be at least 10 characters",
      });
    }

    const result = await pool.query(
      `
      INSERT INTO contacts (name, email, message)
      VALUES ($1, $2, $3)
      RETURNING id, name, email, message, created_at
      `,
      [name.trim(), email.trim().toLowerCase(), message.trim()]
    );

    res.status(201).json({
      success: true,
      message: "Message submitted successfully",
      contact: result.rows[0],
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { createContact };
