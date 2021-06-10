import React from "react";

import useProductQuantity from "../../hooks/useProductQuantity";

import "./Product.scss";
import StyledButton from "../common/ProductButton";

interface QuantityProps {
  pid: string;
  price: number;
}

const ProductQuantity: React.FC<QuantityProps> = ({ pid, price }) => {
  const {
    quantity,
    isBlockedAddition,
    isBlockedSubtraction,
    addProduct,
    substractProduct,
  } = useProductQuantity(0, 1, pid, price);

  return (
    <div className="productQuantity">
      <StyledButton disabled={isBlockedAddition} onClick={() => addProduct()}>
        +
      </StyledButton>
      <StyledButton
        disabled={isBlockedSubtraction}
        onClick={() => substractProduct()}
      >
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
