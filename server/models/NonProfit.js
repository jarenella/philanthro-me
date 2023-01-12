const mongoose = require('mongoose');

const { Schema } = mongoose;

const nonProfitSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String
  },
  amount: {
    type: Number
  }
});

const NonProfit = mongoose.model('NonProfit', nonProfitSchema);

module.exports = NonProfit;
