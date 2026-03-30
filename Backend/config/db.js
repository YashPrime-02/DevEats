const { Pool } = require("pg");
require("dotenv").config();

/**
 * Supports:
 * ✅ Local Docker Postgres (DB_HOST, DB_USER, etc.)
 * ✅ Render / Neon (DATABASE_URL with SSL)
 */

const isProduction = process.env.NODE_ENV === "production";

const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    })
  : new Pool({
      host: process.env.DB_HOST || "localhost",
      port: Number(process.env.DB_PORT) || 5432,
      user: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: isProduction
        ? { require: true, rejectUnauthorized: false }
        : false,
    });

/**
 * ✅ Connection success
 */
pool.on("connect", () => {
  console.log("🟢 PostgreSQL connected");
});

/**
 * ❌ Connection error
 */
pool.on("error", (err) => {
  console.error("🔴 DB Error:", err);
});

/**
 * 🔥 Optional: Test connection on startup (VERY useful)
 */
(async () => {
  try {
    await pool.query("SELECT 1");
    console.log("✅ DB connection test passed");
  } catch (err) {
    console.error("🔥 DB connection failed:", err.message);
  }
})();

module.exports = pool;