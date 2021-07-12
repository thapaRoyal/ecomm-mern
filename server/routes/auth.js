const express = require("express");

const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/authMiddleware");

// controlles
const { createOrUpdateUser } = require("../controllers/authController");

// ROUTES
router.post("/create-or-update-user", authCheck, createOrUpdateUser);

module.exports = router;
