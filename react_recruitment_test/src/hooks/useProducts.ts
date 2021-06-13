import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { apiService } from "../services/api.service";
import { productService } from "../services/products.service";
import { Product } from "../types/productType";

interface ProductsProps {
  products: Product[];
}

export function useProductsData(): ProductsProps {
  const [products, setProducts] = useState<Product[]>();

  const getData = () => {
    productService
      .getProducts()
      .then((response: AxiosResponse<Product[]>) => setProducts(response.data))
      .catch((error: AxiosError) => console.error(error.message));
  };

  useEffect(() => {
    getData();
  }, []);

  return { products };
}
