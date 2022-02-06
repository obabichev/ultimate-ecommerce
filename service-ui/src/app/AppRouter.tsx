import React from "react";
import {
  Switch,
  Redirect,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import LoginPage from "../pages/login";
import HomePage from "../pages/home";
import ProductDetailsPage from "../pages/product-details";
import { QueryParamProvider } from "use-query-params";
import RegistrationPage from "../pages/registration";

interface AppRouterProps {}

export const AppRouter: React.FunctionComponent<AppRouterProps> = () => {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product/:usin" component={ProductDetailsPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/registration" component={RegistrationPage} />
          <Redirect to="/" />
        </Switch>
      </QueryParamProvider>
    </Router>
  );
};
