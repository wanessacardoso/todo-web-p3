import { createContext, useState } from "react";
import { useAxios } from "../hooks/useAxios";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const api = useAxios();

  const [data, setData] = useState(() => {
    const user = localStorage.getItem("@taskapp:user");
    const token = localStorage.getItem("@taskapp:token");
    if (user && token) {
      return { user, token };
    }
    return {};
  });

  const signIn = async ({ email, password }) => {
    try {
      const { data } = await api.post("users/login", { email, password });
      const { user, token } = data;
      console.log(data);
      localStorage.setItem("@taskapp:user", user);
      localStorage.setItem("@taskapp:token", token);
      api.defaults.headers.Authorization = token;
      setData({ user, token });
    } catch (error) {
      console.log(error);
      throw new Error("Falha na autenticação");
    }
  };

  const signOut = async () => {
    try {
      await api.post("users/logout");
      localStorage.removeItem("@taskapp:user");
      localStorage.removeItem("@taskapp:token");
      setData({});
      api.defaults.headers.Authorization = "";
    } catch (error) {
      throw new Error("Não foi possível fazer logout");
    }
  };

  const isAuthenticated = () => {
    return data.token ? true : false;
  };

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
