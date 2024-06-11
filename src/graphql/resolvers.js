const Product = require('../models/productModel');
const User = require('../models/userModel');
const Order = require('../models/orderModel');

const resolvers = {
  product: async ({ id }) => {
    return await Product.findById(id);
  },
  products: async () => {
    return await Product.find();
  },
  user: async ({ id }) => {
    return await User.findById(id);
  },
  users: async () => {
    return await User.find();
  },
  order: async ({ id }) => {
    return await Order.findById(id).populate('productId').populate('userId');
  },
  orders: async () => {
    return await Order.find().populate('productId').populate('userId');
  }
};

module.exports = resolvers;
