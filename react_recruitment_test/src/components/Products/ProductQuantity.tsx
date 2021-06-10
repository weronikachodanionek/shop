import React, { useState } from "react";

import useProductQuantity from "../../dataHooks/useProductQuantity";

import "./ProductQuantity.scss";
import StyledButton from "../common/StyledButton";

const ProductQuantity: React.FC<{ pid: string }> = ({ pid }) => {
  const {
    quantity,
    isBlockedAddition,
    isBlockedSubtraction,
    addProduct,
    substractProduct,
  } = useProductQuantity(0, 1, pid);

  return (
    <div className="productQuantity">
      <StyledButton disabled={isBlockedAddition} onClick={() => addProduct()}>
        +
      </StyledButton>
      <StyledButton disabled={isBlockedSubtraction} onClick={() => substractProduct()}>
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

export { ProductQuantity };
