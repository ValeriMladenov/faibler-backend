const jwt = require("jsonwebtoken");
const props = require("../../config/properties");

const secret = props.JWT_SECRET;
const User = require("../../models/User");

module.exports = {
  Query: {},
  Mutation: {
    generateToken: async (_, { firstName, lastName, phone, email }) => {
      return jwt.sign(
        {
          firstName,
          lastName,
          email,
          phone,
        },
        secret,
        {
          expiresIn: 604800,
        }
      );
    },
  },
};
