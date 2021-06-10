import React from "react";
import { useBasketContext } from "../../context/basketContext";

const Basket: React.FC = () => {
  const { basket } = useBasketContext();

  console.log("bbb", basket);

  return (
    <div className="basket">
      <h2>Podsumowanie</h2>

      <p>Wartość Twojego zamówienia wynosi: </p>
    </div>
  );
};

export { Basket };
