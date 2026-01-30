const express = require("express");
const router = express.Router();
const auth = require("../middleware/authmiddleware");
const admin = require("../middleware/adminMiddleware");
const controller = require("../controllers/adminController");

router.get("/users", auth, admin, controller.getUsers);
router.get("/orders", auth, admin, controller.getOrders);
router.get("/revenue", auth, admin, controller.getRevenue);

module.exports = router;
