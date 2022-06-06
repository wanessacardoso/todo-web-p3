import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useAxios = () => {
  const navigate = useNavigate();

  const instance = axios.create({
    baseURL: "http://localhost:3333",
    timeout: 1000,
  });

  instance.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "@taskapp:token"
      )}`;
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        console.log(error);
        const { status } = error.response;
        if (status === 401) {
          localStorage.removeItem("@taskapp:user");
          localStorage.removeItem("@taskapp:token");
          return navigate("/");
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
};
