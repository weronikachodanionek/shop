import React from "react";

import { useBasketContext } from "../../context/basketContext";

import { BasketItem } from "../../types/basketType";
import "./Basket.scss";

const Basket: React.FC = () => {
  const { basket } = useBasketContext();

  return (
    <div className="basket">
      <h2>Podsumowanie</h2>

      <p>
        Wartość Twojego zamówienia wynosi:
        <span className="basketSummary">
          {basket.length > 0
            ? basket
                .map((item: BasketItem) => item.quantity * item.price)
                .reduce(function (a, b) {
                  return a + b;
                })
            : "0"}
        </span>
        zł
      </p>
    </div>
  );
};

export default Basket;
