import produce from "immer";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import {
  useBasketActionsContext,
  useBasketContext,
} from "../context/basketContext";
import { productService } from "../services/products.service";
import { ProductCheckResponse } from "../types/productCheckType";
import { BasketItem } from "../types";

export function useProductQuantity(
  pid: string,
  price: number,
  min: number,
  max: number
) {
  const step: number = 1;
  const { basket } = useBasketContext();
  const { setBasket } = useBasketActionsContext();

  const [quantity, setQuantity] = useState<number>(0);
  const [isBlockedAddition, setIsBlockedAddition] = useState<boolean>(false);
  const [isBlockedSubtraction, setIsBlockedSubtraction] =
    useState<boolean>(false);

  function addProduct() {
    quantity < max && setQuantity(quantity + step);
  }

  function substractProduct() {
    quantity > min && setQuantity(quantity - step);
  }

  useEffect(() => {
    quantity === max ? setIsBlockedAddition(true) : setIsBlockedAddition(false);
    quantity === min
      ? setIsBlockedSubtraction(true)
      : setIsBlockedSubtraction(false);
  }, [quantity]);

  useEffect(() => {
    const index: number = basket.findIndex(
      (item: BasketItem) => item.id === pid
    );
    index !== -1 ? setQuantity(basket[index].quantity) : 0;
  }, [basket]);

  useEffect(() => {
    productService.checkCard({ pid, quantity }).then(
      (response: AxiosResponse<ProductCheckResponse>) =>
        response.data.success &&
        setBasket(
          produce((draft) => {
            const index = draft.findIndex((item) => item.id === pid);
            index !== -1
              ? (draft[index].quantity = quantity)
              : draft.push({ id: pid, quantity, price });
          })
        )
    );
  }, [quantity]);

  return {
    quantity,
    isBlockedAddition,
    isBlockedSubtraction,
    addProduct,
    substractProduct,
  };
}
