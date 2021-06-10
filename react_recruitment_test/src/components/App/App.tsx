import React from "react";

import { CircularProgress, Container } from "@material-ui/core";
import { Basket, ProductQuantity, UnavailableProduct } from "../Products";

import useProductsData from "../../hooks/useProducts";
import { BasketContextProvider } from "../../context/basketContext";

import "./App.scss";
import "../../assets/styles/index.scss";
import { Product } from "../../types/productType";
import { formatPrice } from "../../helpers/formatPrice";

const App = () => {
  const { products } = useProductsData();

  return (
    <>
      {products ? (
        <BasketContextProvider>
          <Container className="app">
            <h3>Lista produktów</h3>
            <ul className="productsList">
              {products?.map((product: Product) => (
                <li key={product.pid} className="productElement">
                  <div className="productInformation">
                    {product.name}
                    <div className="productPrice">
                      {formatPrice(product.price)} zł
                    </div>
                  </div>

                  {product.isBlocked ? (
                    <UnavailableProduct />
                  ) : (
                    <ProductQuantity
                      pid={product.pid}
                      price={formatPrice(product.price)}
                    />
                  )}
                </li>
              ))}
            </ul>

            <Basket />
          </Container>
        </BasketContextProvider>
      ) : (
        <div className="loader">
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export { App };
