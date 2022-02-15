import { Navigate, useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/Payment/Content/CheckoutForm";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = ({ token, setToggleModal, setModalName }) => {
  const location = useLocation();
  const { product_name, product_price } = location.state;
  // console.log(product_name, product_price);

  return token ? (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          product_name={product_name}
          product_price={product_price}
        />
      </Elements>
    </div>
  ) : (
    <Navigate
      to="/"
      modalName={setModalName("login")}
      toggleModal={setToggleModal("show")}
    />
  );
};

export default Payment;
