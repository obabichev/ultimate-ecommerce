import React, { useContext } from "react";
import { User } from "../generated";
import { useLocalStorage } from "../utils/hooks";

const AUTH_LOCAL_STORAGE_KEY = "ultimate-ecommerce-auth-storage-key";

interface AuthContextValue {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const defaultValue: AuthContextValue = {
  user: null,
  login: () => null,
  logout: () => null,
};

const AuthContext = React.createContext<AuthContextValue>(defaultValue);

const Provider = AuthContext.Provider;

export const useAuthContext = () => useContext(AuthContext);

export const useIsLoggedIn = () => !!useAuthContext().user;

export const AuthContextProvider: React.FunctionComponent = ({ children }) => {
  const [user, setUser] = useLocalStorage<User | null>(
    AUTH_LOCAL_STORAGE_KEY,
    null
  );

  const login = (user: User) => {
    setUser(user);
  };
  const logout = () => setUser(null);

  return <Provider value={{ user, login, logout }}>{children}</Provider>;
};
