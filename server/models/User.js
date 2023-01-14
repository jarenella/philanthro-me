const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
//const Order = require('./Order');
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
  /*orders: [Order.schema],*/
  /*
  favorites: [ //list of favorite non-profits a user has favorited
    {
      type: Schema.Types.ObjectId,
      ref: 'NonProfit'
    }
  ],
  */
 favorites: [NonProfit.schema]
 
},
// toJSON: use virtual
{
  toJSON: {
    virtuals: true,
  },
}
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
  return await bcrypt.compare(password, this.password);
};


const User = mongoose.model('User', userSchema);

module.exports = User;
