const mongoose = require('mongoose');

const { Schema } = mongoose;
const Order = require('./Order');
const NonProfit = require('./NonProfit');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  orders: [Order.schema],
  favorites: [ //list of favorite non-profits a user has favorited
    {
      type: Schema.Types.ObjectId,
      ref: 'NonProfit'
    }
  ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
