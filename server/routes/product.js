const express = require("express");

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/authMiddleware");

// controllers
const { create } = require("../controllers/productController");

// ROUTES
router.post("/product", authCheck, adminCheck, create);

module.exports = router;
