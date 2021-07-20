const express = require("express");
const router = express.Router();

// controller
const { createPaymentIntent } = require("../controllers/stripe");

// middleware
const { authCheck } = require("../middlewares/authMiddleware");

// routes
router.post("/create-payment-intent", authCheck, createPaymentIntent);

module.exports = router;
