/*
const mongoose = require('mongoose');
const { Schema } = mongoose;*/

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


module.exports = nonProfitSchema;
