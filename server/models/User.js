const mongoose = require('mongoose');

const { Schema } = mongoose;
const Order = require('./Order');

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
  userType: {
    type: String,
    required: true
  },
  orders: [Order.schema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
