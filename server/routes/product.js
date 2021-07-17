const express = require("express");

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/authMiddleware");

// controllers
const {
  create,
  listAll,
  remove,
  read,
  update,
} = require("../controllers/productController");

// ROUTES
router.post("/product", authCheck, adminCheck, create);
router.get("/products/:count", listAll); // products/100
router.delete("/product/:slug", authCheck, adminCheck, remove);
router.get("/product/:slug", read);
router.put("/product/:slug", authCheck, adminCheck, update);

module.exports = router;
