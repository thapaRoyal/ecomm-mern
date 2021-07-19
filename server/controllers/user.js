const User = require("../models/userModel");
const Product = require("../models/productModel");
const Cart = require("../models/cart");

exports.userCart = async (req, res) => {
  const { cart } = req.body;

  let products = [];

  const user = await User.findOne({ email: req.user.email }).exec();

  //   check if cart with logged in user id  exists
  let cartExistByThisUser = await Cart.findOne({
    orderdBy: user._id,
  }).exec();

  if (cartExistByThisUser) {
    cartExistByThisUser.remove();
    console.log("REMOVED OLD CART");
  }

  for (let i = 0; i < cart.length; i++) {
    let object = {};

    object.products = cart[i]._id;
    object.count = cart[i].count;
    object.color = cart[i].color;

    // get price for creating tota;
    let { price } = await Product.findById(cart[i]._id).select("price").exec();
    object.price = price;

    products.push(object);
  }

  //   console.log("PRODUCTS ", products);
  let cartTotal = 0;
  for (let i = 0; i < products.length; i++) {
    cartTotal = cartTotal + products[i].price * products[i].count;
  }
  //   console.log("cartTotal", cartTotal);

  let newCart = await new Cart({
    products,
    cartTotal,
    orderdBy: user._id,
  }).save();
  console.log("new cart ----->", newCart);
  res.json({ ok: true });
};

exports.getUserCart = async (req, res) => {
  const user = await User.findOne({ email: req.user.email }).exec();

  let cart = await Cart.findOne({ orderdBy: user._id })
    .populate("products.product", "_id title price totalAfterDiscount")
    .exec();

  const { products, cartTotal, totalAfterDiscount } = cart;
  res.json({ products, cartTotal, totalAfterDiscount });
};
