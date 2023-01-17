const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const nonProfitSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  nonProfitId: {
    type: String,
    required: true,
  }
});

const NonProfit = mongoose.model('NonProfit', nonProfitSchema);

module.exports = NonProfit;
