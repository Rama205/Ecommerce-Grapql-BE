const Product = require('../models/productModel');

const createProduct = async ({ name, description, price, stock }) => {
  const newProduct = new Product({ name, description, price, stock });
  return await newProduct.save();
};

const getProductById = async (id) => {
  return await Product.findById(id);
};

const listProducts = async (page = 1, limit = 10) => {
  return await Product.find().skip((page - 1) * limit).limit(limit);
};

const updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

module.exports = {
  createProduct,
  getProductById,
  listProducts,
  updateProduct,
  deleteProduct,
};
