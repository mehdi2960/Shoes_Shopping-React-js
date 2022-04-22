import React from "react";
import { Switch,Route } from "react-router-dom";
import Home from "../screens/home/index";

export default function Index() {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
     </Switch>
  );
}
