const Order = require('../models/orderModel');
const Product = require('../models/productModel');

const createOrder = async ({ userId, productIds, quantities }) => {
  const products = await Product.find({ _id: { $in: productIds } });
  const total = products.reduce((sum, product, index) => sum + product.price * quantities[index], 0);
  const newOrder = new Order({ user: userId, products: productIds, quantities, total });
  return await newOrder.save();
};

const getOrderById = async (id) => {
  return await Order.findById(id).populate('user').populate('products');
};

const listOrdersForUser = async (userId) => {
  return await Order.find({ user: userId }).populate('products');
};

module.exports = {
  createOrder,
  getOrderById,
  listOrdersForUser,
};
