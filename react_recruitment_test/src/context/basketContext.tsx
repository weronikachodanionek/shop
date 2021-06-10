import React, {
  useState,
  createContext,
  useContext,
  FC,
  Dispatch,
  SetStateAction,
} from "react";
import { BasketItem } from "../types/basketType";

interface BasketContextProps {
  basket: BasketItem[];
}

interface BasketActionsContextProps {
  setBasket: Dispatch<SetStateAction<BasketItem[]>>;
}

const BasketContext = createContext<BasketContextProps>(
  {} as BasketContextProps
);
const BasketActionsContext =
  createContext<BasketActionsContextProps>(
    {} as BasketActionsContextProps
  );

export const useBasketContext = () =>
  useContext(BasketContext);
export const useBasketActionsContext = () =>
  useContext(BasketActionsContext);

export const BasketContextProvider: FC = ({ children }) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  return (
    <BasketContext.Provider value={{ basket }}>
      <BasketActionsContext.Provider value={{ setBasket }}>
        {children}
      </BasketActionsContext.Provider>
    </BasketContext.Provider>
  );
};
