import { store } from "@/store";
import axios from "axios";

const BASE_URL = "https://hungry-cyan-turtleneck.cyclic.app/";

export const HttpClient = axios.create({
  timeout: 325000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  baseURL: BASE_URL,
});

HttpClient.interceptors.request.use(function (config) {
  const token = store.getState().token;
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
