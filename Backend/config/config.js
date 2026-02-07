const { Pool } = require("pg");
require("dotenv").config();

/**
 * Supports:
 * ✅ Local Postgres using DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT
 * ✅ Neon/Render using DATABASE_URL (with SSL)
 */

const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    })
  : new Pool({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

pool.on("connect", () => {
  console.log("🟢 PostgreSQL connected");
});

pool.on("error", (err) => {
  console.error("🔴 DB Error:", err);
});

module.exports = pool;
