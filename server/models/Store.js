const mongoose = require('mongoose');

const { Schema } = mongoose;

const storeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String
  },
  associatedNonProfit: {
    type: String,
    required: true
  },
  items: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Item'
    }
  ]
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
