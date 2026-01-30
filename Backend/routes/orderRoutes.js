const express = require("express");
const router = express.Router();
const auth = require("../middleware/authmiddleware");
const order = require("../controllers/orderController");

router.post("/place", auth, order.placeOrder);

router.get("/", auth, order.getOrders);
router.get("/:id", auth, order.getOrderById);

module.exports = router;
