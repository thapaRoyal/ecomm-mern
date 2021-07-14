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
  res.json(await Category.find({}).sort({ createdAt: -1 }).exec());
};
exports.read = async (req, res) => {
  let category = await Category.findOne({ slug: req.params.slug }).exec();
  res.json(category);
};
exports.update = async (req, res) => {
  const { name } = req.body;
  try {
    let updated = await Category.findOneAndUpdate(
      { slug: req.params.slug },
      { name, slug: slugify(name) },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).send("category update failed");
  }
};
exports.remove = async (req, res) => {
  try {
    const deleted = await Category.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (error) {
    res.status(400).send("category delete failed");
  }
};
