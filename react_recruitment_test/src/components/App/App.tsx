import React from "react";

import useProductsData from "../../dataHooks/useProducts";

import "./App.scss";
import "../../assets/styles/index.scss";
import { ProductQuantity } from "../Products/ProductQuantity";
import { Product } from "../../types/productType";
import { Container } from "@material-ui/core";
import { BasketContextProvider, useBasketContext } from "../../context/basketContext";
import { Basket } from "../Products/Basket";
import useProductQuantity from "../../dataHooks/useProductQuantity";

const App = () => {
  const { products } = useProductsData();

  const { basket } = useBasketContext();
  
  console.log("bbb a", basket)

  return (
    <BasketContextProvider>
      <Container className="app">
        <h3>Lista produktów</h3>
        <ul className="productsList">
          {products?.map((product: Product) => (
            <li key={product.pid} className="productElement">
              <div className="productInformation">
                {product.name}
                <div className="productPrice">{product.price} zł</div>
              </div>
              <ProductQuantity pid={product.pid} />
            </li>
          ))}
        </ul>

      </Container>
    </BasketContextProvider>
  );
};

export { App };
