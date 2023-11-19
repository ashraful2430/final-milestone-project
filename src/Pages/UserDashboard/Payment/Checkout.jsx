import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import useCart from "../../../Hooks/useCart";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transition, setTransition] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const axiosSecure = useAxios();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
    // confirm payment
    const { paymentIntent, error: cardError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      }
    );
    if (cardError) {
      console.log("card error", cardError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transition id", paymentIntent.id);
        setTransition(paymentIntent.id);

        // now save the payment info in database
        const payment = {
          email: user?.email,
          price: totalPrice,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          menuIds: cart.map((item) => item.menuId),
          transitionId: paymentIntent.id,
          status: "Pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("payment", res.data);
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your payment has been succeeded",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetch();
        navigate("/dashboard/paymentHistory");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-outline my-3"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
        {transition && (
          <p className="text-green-600">Transition id: {transition}</p>
        )}
      </form>
    </>
  );
};

export default Checkout;
