const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    console.log("➡️ Register attempt:", email);

    const hash = await bcrypt.hash(password, 10);

    const query = `
      INSERT INTO users (name, email, password_hash)
      VALUES ($1, $2, $3)
      RETURNING id, email
    `;

    const result = await pool.query(query, [name, email, hash]);

    res.status(201).json({
      success: true,
      user: result.rows[0],
    });
  } catch (err) {
    // ✅ TEMP DEBUG (so we can see real Postgres error in Render + response)
    console.error("🔥 REGISTER PG ERROR FULL:", err);

    // Handle duplicate email cleanly
    if (err.code === "23505") {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
        code: err.code,
        detail: err.detail || null,
      });
    }

    // Return real error info for debugging
    return res.status(500).json({
      success: false,
      message: err.message || "Register failed",
      code: err.code || null,
      detail: err.detail || null,
      hint: err.hint || null,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    console.log("➡️ Login attempt:", email);

    const userQuery = `
      SELECT * FROM users WHERE email = $1
    `;

    const result = await pool.query(userQuery, [email]);

    if (result.rows.length === 0) {
      throw { message: "User not found", status: 404 };
    }

    const user = result.rows[0];

    const match = await bcrypt.compare(password, user.password_hash);

    if (!match) {
      throw { message: "Invalid password", status: 401 };
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      success: true,
      token,
    });
  } catch (err) {
    next(err);
  }
};
