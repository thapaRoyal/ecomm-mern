const Category = require("../models/categoryModel");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    console.log(req.body);
    res.json(await new Category({ name, slug: slugify(name) }).save());
  } catch (err) {
    console.log(err);
    res.status(400).send("Create category faliled");
  }
};
exports.list = async (req, res) => {
  //
};
exports.read = async (req, res) => {
  //
};
exports.update = async (req, res) => {
  //
};
exports.remove = async (req, res) => {
  //
};
