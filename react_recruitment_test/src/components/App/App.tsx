import React, { useEffect } from "react";
import useProductsData from "../../dataHooks/useProducts";
import { apiService } from "../../services/api.service";
import { Product } from "../../types/productType";
import "./App.scss";

const App = () => {
  const { products } = useProductsData();

  return (
    <div className="container">
      <h3>Lista produktów</h3>
      <ul>
        {products?.map((product: Product) => (
          <li key={product.pid} className="row">
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { App };
