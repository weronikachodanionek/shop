import React from "react";

import { CircularProgress, Container, Grid, Paper } from "@material-ui/core";
import { Basket, ProductQuantity, UnavailableProduct } from "../Products";

import useProductsData from "../../hooks/useProducts";
import { BasketContextProvider } from "../../context/basketContext";

import "./App.scss";
import "../../assets/styles/index.scss";
import { Product } from "../../types/productType";
import { formatPrice } from "../../helpers/formatPrice";
import { NoPhoto } from "../Animations";

const App = () => {
  const { products } = useProductsData();

  return (
    <>
      {products ? (
        <BasketContextProvider>
          <Container className="app">
            <h3>Lista produktów</h3>
            <Grid container>
              {products?.map((product: Product) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={product.pid}
                  className="productElement"
                >
                  <Paper className="productCard">
                    <div className="productInformation">
                      {product.name}
                      <div className="productPrice">
                        {formatPrice(product.price)} zł
                      </div>
                    </div>

                    {product.image ? (
                      <div
                        className="productImage"
                        style={{ backgroundImage: `url(${product.image})` }}
                      ></div>
                    ) : (
                      <div className="productNoPhoto">
                        <NoPhoto />
                      </div>
                    )}

                    {product.isBlocked ? (
                      <UnavailableProduct />
                    ) : (
                      <ProductQuantity
                        pid={product.pid}
                        price={formatPrice(product.price)}
                      />
                    )}
                  </Paper>
                </Grid>
              ))}
            </Grid>

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
