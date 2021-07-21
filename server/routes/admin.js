const router = require("express");

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/authMiddleware");

const { orders, orderStatus } = require("../middlewares/admin");

// routes
router.get("admin/orders", authCheck, adminCheck, orders);
router.put("admin/order-status", authCheck, adminCheck, orderStatus);

module.exports = router;
