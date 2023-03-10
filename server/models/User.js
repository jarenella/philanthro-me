/*
const mongoose = require('mongoose');
const { Schema } = mongoose;*/
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
//const Order = require('./Order');
const nonProfitSchema = require('./NonProfit');

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
    match:[/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(com|edu|gov)$/i],
    required: true
  },
  /*orders: [Order.schema],*/
  /*
  favorites: [ //list of favorite non-profits a user has favorited
    {
      type: Schema.Types.ObjectId,
      ref: 'NonProfit'
    }
  ],
  */
 favorites: [nonProfitSchema],
 donation: [nonProfitSchema],
 
},
// toJSON: use virtual
/*
{
  toJSON: {
    virtuals: true,
  },
}
*/
);

// middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// hashed password compared with user's input
userSchema.methods.isCorrectPassword = async function(password) {
  console.log(password)
  return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);

module.exports = User;