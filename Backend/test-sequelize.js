require("dotenv").config();
const db = require("./models");

(async () => {
  try {
    console.log("🔌 Testing Sequelize models...");

    const users = await db.User.findAll({ limit: 1 });
    console.log("✅ Users:", users.length);

    const orders = await db.Order.findAll({ limit: 1 });
    console.log("✅ Orders:", orders.length);

    console.log("🎉 All Sequelize models loaded correctly");
    process.exit(0);
  } catch (err) {
    console.error("❌ Sequelize test failed:", err.message);
    process.exit(1);
  }
})();
