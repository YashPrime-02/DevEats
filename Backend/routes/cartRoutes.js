const express = require("express");
const router = express.Router();

const auth = require("../middleware/authmiddleware");
const cart = require("../controllers/cartController");

router.post("/add", auth, cart.addToCart);
router.get("/", auth, cart.getCart);
router.delete("/:id", auth, cart.removeItem);

module.exports = router;
