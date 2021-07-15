const express = require("express");

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/authMiddleware");

// controllers
const { create, read } = require("../controllers/productController");

// ROUTES
router.post("/product", authCheck, adminCheck, create);
router.get("/products", read);

module.exports = router;
