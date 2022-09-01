const { randomBytes } = require("crypto");
const { users, quotes } = require("./fakeData");
const bcrypt = require("bcryptjs");
const User = require("./models/user");
const Quote = require("./models/quote");
const jwt = require("jsonwebtoken");
//Resolvers
const resolvers = {
  Query: {
    users: async () => await User.find(),
    user: async (_, { _id }) => await User.findById(_id),
    quotes: async () => await Quote.find().populate("by", "_id firstName"),
    quotesById: async (_, { by }) => await Quote.find({ by }),
    myProfile: async (_, args, { userId }) => {
      if (!userId) {
        throw new Error("You must be logged in!");
      }
      return await User.findById(userId);
    },
  },
  User: {
    quotes: async (ur) => await Quote.find({ by: ur._id }),
  },
  Mutation: {
    signUpUser: async (_, { userNew }) => {
      const user = await User.findOne({ email: userNew.email });
      if (user) {
        throw new Error("User already exist");
      }
      const hashPassword = await bcrypt.hash(userNew.password, 12);
      return await User.create({
        ...userNew,
        password: hashPassword,
      });
    },
    signInUser: async (_, { userSignIn }) => {
      const user = await User.findOne({ email: userSignIn.email });
      if (!user) {
        throw new Error("USer doest not exist");
      }
      const doMatch = await bcrypt.compare(userSignIn.password, user.password);
      if (!doMatch) {
        throw new Error("invalud emal or password");
      }
      const token = jwt.sign({ userId: user._id }, "graphqlsecret");
      return { token };
    },
    createQuote: async (_, { name }, { userId }) => {
      if (!userId) {
        throw new Error("You must be logged in");
      }
      await Quote.create({
        name,
        by: userId,
      });
      return "Quote Saved!";
    },
  },
};

module.exports = resolvers;
