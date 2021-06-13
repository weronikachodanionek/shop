import React, { FC } from "react";

import { ModalProvider } from "react-modal-hook";

import { CircularProgress, Container, Grid, Paper } from "@material-ui/core";
import { Basket, ProductQuantity, UnavailableProduct } from "../Products";
import { DetailsModal } from "../Modals";

import { useProductsData } from "../../hooks";
import { BasketContextProvider } from "../../context";

import "./App.scss";
import "../../assets/styles/index.scss";
import { Product } from "../../types";
import { formatPrice } from "../../helpers";
import { NoPhoto } from "../Animations";

const App: FC = () => {
  const { products } = useProductsData();

  return (
    <BasketContextProvider>
      <ModalProvider>
        <>
          {products ? (
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
                        <div className="productName">{product.name}</div>
                        <div className="productPrice">
                          {formatPrice(product.price)} zł
                        </div>
                      </div>

                      {product.image ? (
                        <div className="productImageOverlay">
                          <div
                            className="productImage"
                            style={{ backgroundImage: `url(${product.image})` }}
                          ></div>
                        </div>
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
                          min={product.min}
                          max={product.max}
                        />
                      )}
                      <DetailsModal productDetails={product} />
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              <Basket />
            </Container>
          ) : (
            <div className="loader">
              <CircularProgress />
            </div>
          )}
        </>
      </ModalProvider>
    </BasketContextProvider>
  );
};

export { App };
