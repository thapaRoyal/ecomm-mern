const express = require("express");

const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/authMiddleware");

// controlles
const {
  createOrUpdateUser,
  currentUser,
} = require("../controllers/authController");

// ROUTES
router.post("/create-or-update-user", authCheck, createOrUpdateUser);
router.post("/current-user", authCheck, currentUser);

module.exports = router;
