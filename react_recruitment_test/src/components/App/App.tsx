import React from "react";

import { CircularProgress, Container, Grid, Paper } from "@material-ui/core";
import { Basket, ProductQuantity, UnavailableProduct } from "../Products";
import { DetailsModal } from "../Modals";

import useProductsData from "../../hooks/useProducts";
import { BasketContextProvider } from "../../context/basketContext";

import "./App.scss";
import "../../assets/styles/index.scss";
import { Product } from "../../types/productType";
import { formatPrice } from "../../helpers/formatPrice";
import { NoPhoto } from "../Animations";
import { ModalProvider } from "react-modal-hook";

const App = () => {
  const { products } = useProductsData();

  return (
    <ModalProvider>
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
                        />
                      )}
                      <DetailsModal
                        productDetails={product}
                      />
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
    </ModalProvider>
  );
};

export { App };
