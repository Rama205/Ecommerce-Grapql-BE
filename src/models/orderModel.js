const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
  quantities: [{ type: Number, required: true }],
  total: { type: Number, required: true },
});

module.exports = mongoose.model('Order', orderSchema);
