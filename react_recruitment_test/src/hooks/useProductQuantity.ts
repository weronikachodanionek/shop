import { useEffect, useState } from "react";
import {
  useBasketActionsContext,
  useBasketContext,
} from "../context/basketContext";

function useProductQuantity(
  val: number,
  step: number,
  pid: string,
  price: number,
) {
  const { basket } = useBasketContext();
  const { setBasket } = useBasketActionsContext();
  const [quantity, setQuantity] = useState<number>(val);
  const [isBlockedAddition, setIsBlockedAddition] = useState<boolean>(false);
  const [isBlockedSubtraction, setIsBlockedSubtraction] =
    useState<boolean>(false);

  function addProduct() {
    quantity < 5 && setQuantity(quantity + step);
  }

  function substractProduct() {
    quantity > 0 && setQuantity(quantity - step);
  }

  useEffect(() => {
    quantity === 5 ? setIsBlockedAddition(true) : setIsBlockedAddition(false);
    quantity === 0
      ? setIsBlockedSubtraction(true)
      : setIsBlockedSubtraction(false);
  }, [quantity]);

  useEffect(() => {
    setBasket([...basket, { id: pid, quantity: quantity, price: price }]);
    // pyt: czy to id jest tu potrzebne?
  }, [quantity]);

  return {
    quantity,
    isBlockedAddition,
    isBlockedSubtraction,
    addProduct,
    substractProduct,
  };
}

export default useProductQuantity;
