require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// 🔥 ADD THIS (DB CONNECTION)
const pool = require("./config/db");

const contactRoutes = require("./routes/contactRoutes");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

/**
 * ✅ CORS WHITELIST (ENV-DRIVEN + SAFE)
 */
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : [
      "https://food-delivary-app-jet.vercel.app",
      "http://localhost:5173",
      "http://localhost:3000",
    ];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.warn("❌ Blocked by CORS:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);

/**
 * ✅ SECURITY HEADERS
 */
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  }),
);

/**
 * ✅ BODY PARSER
 */
app.use(express.json());

/**
 * ✅ LOGGER
 */
app.use(logger);

/**
 * ✅ RATE LIMIT (AUTH ONLY)
 */
const authLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 40,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

app.use("/api/auth", authLimiter, authRoutes);

/**
 * ✅ HEALTH CHECK
 */
app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "API is healthy",
    time: new Date().toISOString(),
  });
});

/**
 * ✅ ROUTES
 */
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/contact", contactRoutes);

/**
 * ✅ ERROR HANDLER
 */
app.use(errorHandler);

const initDB = async () => {
  for (let i = 0; i < 10; i++) {
    try {
      await pool.query("SELECT 1");

      await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          name TEXT,
          email TEXT UNIQUE,
          password_hash TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);

      await pool.query(`
        CREATE TABLE IF NOT EXISTS carts (
          id SERIAL PRIMARY KEY,
          user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
          status TEXT DEFAULT 'active',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);

      await pool.query(`
        CREATE TABLE IF NOT EXISTS cart_items (
          id SERIAL PRIMARY KEY,
          cart_id INTEGER REFERENCES carts(id) ON DELETE CASCADE,
          external_item_id TEXT,
          quantity INTEGER DEFAULT 1,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);

      await pool.query(`
  CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    total_amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'placed',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`);

      await pool.query(`
  CREATE TABLE IF NOT EXISTS order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    external_item_id TEXT NOT NULL,
    name TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image_url TEXT,
    quantity INTEGER NOT NULL
  );
`);

      return;
    } catch (err) {
      await new Promise((res) => setTimeout(res, 3000));
    }
  }

  throw new Error("DB failed");
};

const PORT = process.env.PORT || 3000;
/**
 * ✅ SERVER START
 */
initDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
