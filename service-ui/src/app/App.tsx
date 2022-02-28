import React from "react";
import { AppRouter } from "./AppRouter";
import { AuthContextProvider } from "./AuthContext";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { SnackbarProvider } from "notistack";

const queryClient = new QueryClient();

interface AppProps {}

export const App: React.FunctionComponent<AppProps> = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <CssBaseline />
          <AppRouter />
          <ReactQueryDevtools initialIsOpen={false} />
        </AuthContextProvider>
      </QueryClientProvider>
    </SnackbarProvider>
  );
};
