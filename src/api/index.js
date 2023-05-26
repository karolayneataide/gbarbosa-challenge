import axios from "axios";
import { LOGIN_PLUS_USER } from "../providers";

const api = axios.create({
  baseURL: "https://testfrontend.lookpages.win",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem(LOGIN_PLUS_USER));
    console.log(user);

    if (user?.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error.response.data.error);
  }
);

export default api;
