import React, { useContext } from "react";
import { User } from "../generated";
import { useLocalStorage } from "../utils/hooks";
import { useGetProfile } from "../service/auth";
import { Profile } from "../profile.types";

const AUTH_LOCAL_STORAGE_KEY = "ultimate-ecommerce-auth-storage-key";

interface AuthContextValue {
  user: Profile | null;
  // login: (user: P) => void;
  // logout: () => void;
}

const defaultValue: AuthContextValue = {
  user: null,
  // login: () => null,
  // logout: () => null,
};

const AuthContext = React.createContext<AuthContextValue>(defaultValue);

const Provider = AuthContext.Provider;

export const useAuthContext = () => useContext(AuthContext);

export const useIsLoggedIn = () => !!useAuthContext().user;

export const AuthContextProvider: React.FunctionComponent = ({ children }) => {
  const profileQuery = useGetProfile();
  console.log("[obabichev]", { profile: profileQuery.data });

  // const [user, setUser] = useLocalStorage<User | null>(
  //   AUTH_LOCAL_STORAGE_KEY,
  //   null
  // );

  // const login = (user: User) => {
  //   setUser(user);
  // };
  // const logout = () => setUser(null);

  return (
    <Provider value={{ user: profileQuery.data ?? null }}>{children}</Provider>
  );
};
