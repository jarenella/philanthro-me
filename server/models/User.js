const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const nonProfitSchema = require('./NonProfit');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
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

 favorites: [nonProfitSchema],
 donation: [nonProfitSchema],
 
},

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