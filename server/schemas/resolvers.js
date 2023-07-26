const { Team, User, Post } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    team: async () => {
      return await Team.find({});
    },
    user: async () => {
      return await User.find({});
    },
    // fanPost: async () => {
    //   // Populate the classes subdocument on every instance of Professor
    //   return await Post.find({}).populate('team');
    // },
    postbyteam: async (parent, {teamid}) => {
      return await Post.find({team: teamid}).populate('team');
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
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
    addTeamPost: async (parent, { title, description, teamId }) => {
      try {
        return (await Post.create({ title, description, team: teamId }));
      } catch (error) {
        console.error('error');
        console.error(error);
      }
    },
    // updateTeamPost: async (parent, { title, description, teamId, postId }) => {
    //   try {
    //     return (await Post.findByIdAndUpdate({ title, description, team: teamId, _id: postId}));
    //     //{new: true}
    //   } catch (error) {
    //     console.error('error');
    //     console.error(error);
    //   }
    // },
    updateTeamPost: async (parent, { title, description, teamId, postId }) => {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          postId,
          { title, description, team: teamId },
          { new: true }
        );
        return updatedPost;
      } catch (error) {
        console.error('error');
        console.error(error);
      }
    },
    deleteTeamPost: async (parent, { postId }) => {
      try {
        return (await Post.findOneAndDelete( {_id: postId}));
      } catch (error) {
        console.error('error');
        console.error(error);
      }
    },
  }
};




module.exports = resolvers;