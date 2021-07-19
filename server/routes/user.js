const express = require("express");

const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/authMiddleware");

// controller
const { userCart } = require("../controllers/user");

// routes
router.post("/cart", authCheck, userCart);

module.exports = router;
