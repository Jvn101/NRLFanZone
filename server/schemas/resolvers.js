const { Team, User, Post } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

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
    }
  },

  // const session = await stripe.checkout.sessions.create({
  //   payment_method_types: ['card'],
  //   line_items,
  //   mode: 'payment',
  //   success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
  //   cancel_url: `${url}/`,
  // });
  
  // return { session: session.id };
// },
// },

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
  }
};




module.exports = resolvers;