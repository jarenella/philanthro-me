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
  orgsId: {
    type: String,
    required: true,
  }
  logo: {
    type: String
  },
});

module.exports = nonProfitSchema;
