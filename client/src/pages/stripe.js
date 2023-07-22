//const stripe = require("stripe")('sk_test_wsFx86XDJWwmE4dMskBgJYrt');

import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";

const stripePromise = loadStripe("sk_test_wsFx86XDJWwmE4dMskBgJYrt");
// TODO: call the /create-payment-intent endpoint and return data
const Stripe = () => {
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  return (
    <main>
      <div className="flex-row justify-center">
        <form action="/create-checkout-session" method="POST">
          <button type="submit">Donate</button>
        </form>
      </div>
    </main>
  );
};

export default Stripe;
