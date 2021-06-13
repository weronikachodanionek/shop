import React, { FC } from "react";

import { useProductQuantity } from "../../hooks";

import "./Product.scss";
import StyledButton from "../Buttons/ProductButton";
import { useBasketContext } from "../../context";
import { useState } from "react";
import { useEffect } from "react";
import { BasketItem } from "../../types";

interface QuantityProps {
  pid: string;
  price: number;
  min: number;
  max: number;
}

const ProductQuantity: FC<QuantityProps> = ({ pid, price, min, max }) => {

  const {
    quantity,
    isBlockedAddition,
    isBlockedSubtraction,
    addProduct,
    substractProduct,
  } = useProductQuantity(pid, price, min, max);


  return (
    <div className="productQuantity">
      <StyledButton disabled={isBlockedAddition} onClick={addProduct}>
        +
      </StyledButton>
      <StyledButton disabled={isBlockedSubtraction} onClick={substractProduct}>
        -
      </StyledButton>

      <p className="quantityMessage">
        Obecnie masz
        <>
          {quantity > 0 ? (
            <span className="quantityNumber">{quantity}</span>
          ) : (
            <span>{quantity}</span>
          )}
        </>
        sztuk produktu
      </p>
    </div>
  );
};

export default ProductQuantity;
