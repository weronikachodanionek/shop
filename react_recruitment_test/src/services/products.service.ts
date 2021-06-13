import { AxiosError, AxiosPromise } from "axios";
import { ProductCheck } from "../types/productCheckType";
import { apiService } from "./api.service";

class ProductsService {
  getProducts(): AxiosPromise {
    const apiUrl: string = "/api/cart";
    return apiService
      .get(apiUrl)
      .catch((error: AxiosError) => Promise.reject(error));
  }
  checkCard(data: ProductCheck): AxiosPromise {
    const apiUrl: string = "/api/product/check";
    return apiService
      .post(apiUrl, data)
      .catch((error: AxiosError) => Promise.reject(error));
  }
}

export const productService = new ProductsService();
