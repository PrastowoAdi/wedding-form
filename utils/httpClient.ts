import { store } from "@/store";
import axios from "axios";

// const BASE_URL = "https://hungry-cyan-turtleneck.cyclic.app/";
// const BASE_URL = "https://hungry-cyan-turtleneck.cyclic.app/";
// const BASE_URL = "https://wild-cyan-dolphin-suit.cyclic.app/";
// const BASE_URL = "http://localhost:3001/";
const BASE_URL = "https://api.prastowonugroho.my.id/";

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
