import React, { useContext } from "react";
import { useGetProfile } from "../service/auth";
import { Profile } from "../profile.types";

interface AuthContextValue {
  user: Profile | null;
}

const defaultValue: AuthContextValue = {
  user: null,
};

const AuthContext = React.createContext<AuthContextValue>(defaultValue);

const Provider = AuthContext.Provider;

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider: React.FunctionComponent = ({ children }) => {
  const profileQuery = useGetProfile();

  return (
    <Provider value={{ user: profileQuery.data ?? null }}>{children}</Provider>
  );
};
