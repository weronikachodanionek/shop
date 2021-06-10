import { useEffect, useState } from "react";
import {
  useBasketActionsContext,
  useBasketContext,
} from "../context/basketContext";

function useProductQuantity(val: number, step: number, pid: string) {
  const { basket } = useBasketContext();
  const { setBasket } = useBasketActionsContext();
  const [quantity, setQuantity] = useState<number>(val);
  const [isBlockedAddition, setIsBlockedAddition] = useState<boolean>(false);
  const [isBlockedSubtraction, setIsBlockedSubtraction] =
    useState<boolean>(false);

  function addProduct() {
    if (quantity < 3) {
      setQuantity(quantity + step);
      substractProduct();
    } else {
      setIsBlockedAddition(true);
      setQuantity(quantity);
    }
  }

  function substractProduct() {
    if (quantity > 0) {
      setQuantity(quantity - step);
      addProduct();
    } else {
      setIsBlockedSubtraction(true);
    }
  }

  useEffect(() => {
    setBasket([...basket, { id: pid, quantity: quantity }]);
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
