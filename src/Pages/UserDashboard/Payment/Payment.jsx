import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";

// TODO : add publish key (pk) from stripe
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEAWAY_PK);
console.log(stripePromise);

const Payment = () => {
  return (
    <>
      <div>
        <h3 className="text-4xl font-bold text-center">Payment</h3>
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <Checkout />
        </Elements>
      </div>
    </>
  );
};

export default Payment;
