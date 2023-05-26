import { useSnackbar } from "notistack";
import { createContext, useState } from "react";
import api from "../api";

export const LOGIN_PLUS_USER = "LOGIN_PLUS_USER";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem(LOGIN_PLUS_USER))
  );

  const { enqueueSnackbar } = useSnackbar();

  async function login(values) {
    return api
      .post("/user/login", {
        email: values.email,
        password: values.password,
      })
      .then(async ({ token }) => {
        const response = await api.get("/user/profile", {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });

        const newUser = { ...response, token };

        console.log(newUser);

        setUser(newUser);
        localStorage.setItem(LOGIN_PLUS_USER, JSON.stringify(newUser));

        enqueueSnackbar("Login realizado com sucesso", { variant: "success" });
        return newUser;
      })
      .catch((error) => enqueueSnackbar(error, { variant: "error" }));
  }

  function logout() {
    localStorage.setItem(LOGIN_PLUS_USER, null);
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
