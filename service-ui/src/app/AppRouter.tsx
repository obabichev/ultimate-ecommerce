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

interface AppRouterProps {}

export const AppRouter: React.FunctionComponent<AppRouterProps> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/product/:id" component={ProductDetailsPage} />
        <Route exact path="/login" component={LoginPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
