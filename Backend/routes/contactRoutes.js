const express = require("express");
const router = express.Router();

const controller = require("../controllers/contactController");

router.post("/", controller.submitContact);

module.exports = router;
