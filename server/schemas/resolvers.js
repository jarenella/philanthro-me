const { AuthenticationError } = require("apollo-server-express");
//*In progress const { User, NonProfit, Category } = require("../models");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  //Queries
  Query: {
/* In progress - belongs to original idea
    categories: async () => {
      return await Category.find();
    },
    
    nonProfits: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }
      return await NonProfit.find(params).populate("category");
    },
    nonProfit: async (parent, { _id }) => {
      return await NonProfit.findById(_id).populate("category");
    },
  */
    user: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id }).select('-__v -password');
        
      }
      /* In progresss - when we add orders
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.nonProfits",
          populate: "category",
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }
      */
      throw new AuthenticationError("Not logged in");
    },
    /* In progresss - when we add orders
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.nonProfits",
          populate: "category",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
    */
  },
  //Store
  //Non-Profit

  //Mutations:
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    /* In progresss - 
    addOrder: async (parent, { nonProfits }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ nonProfits });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    updateNonProfit: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await NonProfit.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
    */
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      console.log(user);

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);
      console.log(correctPw);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    // Save a non Profit to user's profile
    saveNonProfit: async (parent, { nonProfitData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { favorites: nonProfitData } },
          { new: true}
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    //Delete a non Profit
    removeNonProfit: async (parent, { nonProfitId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { favorites: { nonProfitId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  };


module.exports = resolvers;
