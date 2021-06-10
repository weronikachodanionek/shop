import { useEffect, useState } from "react";
import { apiService } from "../services/api.service";
import { Product } from "../types/productType";

interface ProductsProps {
  products: Product[];
}

export default function useProductsData(): ProductsProps {
  const [products, setProducts] = useState<Product[]>();

  const getData = async () => {
    const res = await apiService.get("/api/cart", {});
    const products = res.data;
    setProducts(products);
  };

  useEffect(() => {
    getData();
  }, []);

  return { products };
}
