const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  nonProfits: [
    {
      type: Schema.Types.ObjectId,
      ref: 'NonProfit'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
