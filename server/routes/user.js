const express = require("express");

const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/authMiddleware");
// controllers
const { userCart, getUserCart, emptyUserCart } = require("../controllers/user");

router.post("/user/cart", authCheck, userCart); // save cart
router.get("/user/cart", authCheck, getUserCart); // get cart
router.delete("/user/cart", authCheck, emptyUserCart); // empty cart

// router.get("/user", (req, res) => {
//   res.json({
//     data: "hey you hit user API endpoint",
//   });
// });

module.exports = router;
