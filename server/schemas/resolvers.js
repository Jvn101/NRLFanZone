const { Team, User, Post } = require('../models');

const resolvers = {
  Query: {
    team: async () => {
      return await Team.find({}).populate('teamusers');
    },
    user: async () => {
      return await User.find({});
    },
    fanPost: async () => {
      // Populate the classes subdocument on every instance of Professor
      return await Post.find({});
    }
  },

  Mutation: {

    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  }
};

module.exports = resolvers;
