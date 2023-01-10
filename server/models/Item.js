const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  store: {
    type: String,
    required: true
  }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
