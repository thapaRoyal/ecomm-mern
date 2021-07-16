const express = require("express");

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/authMiddleware");

// controllers
const { create, listAll } = require("../controllers/productController");

// ROUTES
router.post("/product", authCheck, adminCheck, create);
router.get("/products/:count", listAll); //products/10

module.exports = router;
