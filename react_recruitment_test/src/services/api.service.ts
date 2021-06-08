import axios, { AxiosInstance } from "axios";
// import { API_URL } from "appConfig";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3030",
});

export const apiService = axiosInstance;
