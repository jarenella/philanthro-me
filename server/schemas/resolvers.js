const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const ContactForm = require("../models/ContactForm");
const { signToken } = require("../utils/auth");

const resolvers = {
  //Queries
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
      }
      throw new AuthenticationError("Not logged in");
    },
  },

  //Mutations:
  Mutation: {
    // Add new User - Signup
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    // Login
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
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // Delete a non Profit
    removeNonProfit: async (parent, { orgsId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { favorites: { orgsId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // Add a non Profit to user's cart
    addNonProfit: async (parent, { nonProfitData }, context) => {
      console.log("We are here");
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { donation: nonProfitData } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // Delete a non Profit from user's cart
    deleteNonProfit: async (parent, { orgsId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { donation: { orgsId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // Contact Form
    async submitContactForm(parent, args, context, info) {
      const { name, email, message } = args;
      try {
        const newContactForm = new ContactForm({ name, email, message });
        await newContactForm.save();
        return "Form submitted successfully";
      } catch (error) {
        console.error(error);
        throw new Error("Failed to submit form");
      }
    },
  },
};

module.exports = resolvers;
