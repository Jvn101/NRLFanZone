// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// const express = require("express");
// const app = express();
// // This is a public sample test API key.
// // Don’t submit any personally identifiable information in requests made with this key.
// // Sign in to see your own test API key embedded in code samples.
// const stripe = require("stripe")('sk_test_wsFx86XDJWwmE4dMskBgJYrt');

// app.use(express.static("public"));
// app.use(express.json());

// const Stripe = () => {

// const calculateOrderAmount = (items) => {
//   // Replace this constant with a calculation of the order's amount
//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client
//   return 1400;
// };

// app.post("/create-payment-intent", async (req, res) => {
//   const { items } = req.body;

//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: calculateOrderAmount(items),
//     currency: "usd",
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });

//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

// app.listen(4242, () => console.log("Node server listening on port 4242!"));




// return (

//   <div className="auth-form-container App">
//     <form action="/create-checkout-session" method="POST">
//         <button type = "submit">Donate</button>
//     </form>
//     </div>
// )



// }

// export default Stripe;
