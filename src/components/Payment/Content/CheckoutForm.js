import "./checkout-form.scss";

import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import axios from "axios";

const CheckoutForm = ({ product_name, product_price }) => {
  const totalPrice = (
    Math.floor((product_price + 0.8 + 0.4) * 100) / 100
  ).toFixed(2);
  console.log(totalPrice);

  // console.log("Content ===> ", product_name, product_price);
  const stripe = useStripe();
  const elements = useElements();

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: "userId",
      });

      console.log(stripeResponse);
      console.log(stripeResponse.token.id);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeResponse.token.id,
          title: product_name,
          amount: totalPrice,
        }
      );
      console.log("after axios reaquest");

      if (response.data) {
        setCompleted(true);
      } else {
        alert("Le paiement a échoué.");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="payment-checkout">
      <p className="resume">Résumé de la commande</p>
      <div className="prices">
        <div className="line">
          <p>Commande</p>
          <p>{product_price.toFixed(2)} €</p>
        </div>
        <div className="line">
          <p>Frais de protection acheteurs</p>
          <p>0.40 €</p>
        </div>
        <div className="line">
          <p>Frais de port</p>
          <p>0.80 €</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="total">
        <div className="line">
          <p>Total</p>
          <p>{totalPrice} €</p>
        </div>
        <div className="text">
          <p>
            Il ne vous reste plus qu'une étape pour vous offir{" "}
            <span>{product_name}</span>. Vous allez payer{" "}
            <span>{totalPrice} €</span> (frais de protection et de port inclus).
          </p>
        </div>
      </div>

      {!completed ? (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit">Valider</button>
        </form>
      ) : (
        <span>Paiement effectué ! </span>
      )}
    </div>
  );
};

export default CheckoutForm;
