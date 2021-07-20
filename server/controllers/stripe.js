const User = require("../models/userModel");
const Cart = require("../models/cart");
const Product = require("../models/productModel");
const Coupon = require("../models/coupon");

const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.createPaymentIntent = async (req, res) => {
  //later apply coupon
  // later calculate price

  //   1. find user
  const user = await User.findOne({ email: req.user.email }).exec();

  // 2. get user cart tota;
  const { cartTotal } = await Cart.findOne({ orderdBy: user._id }).exec();

  console.log("CART TOTAL CHARGED", cartTotal);
  // create payment intent with order amout and currency

  const paymentIntent = await stripe.paymentIntents.create({
    amount: cartTotal * 100, // value goes in cents so needs to multipli by 100
    currency: "usd",
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};
