import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/practice" exact component={Quiz} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
