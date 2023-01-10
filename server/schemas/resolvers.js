const { AuthenticationError } = require("apollo-server-express");
const { User, Item, Category} = require("../models");


const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    items: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }
      return await Item.find(params).populate("category");
    },
    item: async (parent, { _id }) => {
      return await Item.findById(_id).populate("category");
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.items",
          populate: "category",
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }
      throw new AuthenticationError("Not logged in");
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.items",
          populate: "category",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
  },
  //Store
  //Non-Profit
  //Mutations
};

module.exports = resolvers;
