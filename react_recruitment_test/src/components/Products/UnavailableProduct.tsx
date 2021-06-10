import React from "react";

import { UnavailableProductButton } from "../common";

import "./Product.scss";

const UnavailableProduct: React.FC = () => {
  return (
    <div className="productQuantity">
      <UnavailableProductButton disabled>+</UnavailableProductButton>
      <UnavailableProductButton disabled>-</UnavailableProductButton>

      <p className="quantityMessage">Produkt chwilowo niedostępny</p>
    </div>
  );
};

export default UnavailableProduct;
