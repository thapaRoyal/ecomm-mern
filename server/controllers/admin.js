const Order = require("../models/ordes");

exports.orders = async (req, res) => {
  let orders = await orders
    .find({})
    .sort("-createdAt")
    .populate("products.product")
    .exec();

  res, json(orders);
};

exports.orderStatus = async (req, res) => {
  const { orderId, orderStatus } = req.body;

  let updated = await Order.findByIdAndUpdate(
    orderId,
    { orderStatus },
    { new: true }
  ).exec();

  res.json(updated);
};
