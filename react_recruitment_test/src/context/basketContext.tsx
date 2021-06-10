import React, {
  useState,
  createContext,
  useContext,
  FC,
  Dispatch,
  SetStateAction,
} from "react";

interface BasketObject {
  id: string;
  quantity: number | null;
}

interface BasketContextProps {
  basket: BasketObject[];
}

interface BasketActionsContextProps {
  setBasket: Dispatch<SetStateAction<BasketObject[]>>;
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
  const [basket, setBasket] = useState<BasketObject[]>([]);

  return (
    <BasketContext.Provider value={{ basket }}>
      <BasketActionsContext.Provider value={{ setBasket }}>
        {children}
      </BasketActionsContext.Provider>
    </BasketContext.Provider>
  );
};
