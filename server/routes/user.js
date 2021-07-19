const express = require("express");

const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/authMiddleware");

// controller
const { userCart, getUserCart } = require("../controllers/user");

// routes
router.post("/user/cart", authCheck, userCart); ///save cart
router.get("/user/cart", authCheck, getUserCart); //get cart

module.exports = router;
