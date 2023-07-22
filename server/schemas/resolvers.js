const { Team, User, Post } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');
const stripe = require('stripe');

require("dotenv").config();
const app = express();

const stripe = Stripe(process.env.STRIPE_KEY)


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

 // We map through the list of products sent by the client to extract the _id of each item and create a new Order.
//  await Order.create({ products: args.products.map(({ _id }) => _id) });
//  const line_items = [];

//  for (const product of args.products) {
//    line_items.push({
//      price_data: {
//        currency: 'usd',
//        product_data: {
//          name: product.name,
//          description: product.description,
//          images: [`${url}/images/${product.image}`],
//        },
//        unit_amount: product.price * 100,
//      },
//      quantity: product.purchaseQuantity,
//    });
//  }

// checkout: async (parent, args, context) => {
//   const url = new URL(context.headers.referer).origin
//   const line_items = []
// }

// line_items.push({
//        price_data: {
//          currency: 'aud',
//          product_data: {
//            name: "donation",
//            description: "donation to..."
//          },
//         }
//      });
   

// const session = await stripe.checkout.sessions.create({
//   payment_method_types: ['card'],
//   line_items,
//   mode: 'payment',
//   success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
//   cancel_url: `${url}/`,
// });

// return { session: session.id };

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "aud",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
    //res.send({url: session.url})
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));


module.exports = resolvers;
