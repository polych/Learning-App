import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoutes from "../PrivateRoutes";
import AuthRoutes from "../AuthRoutes";
import "../styles/general.scss";
const App = () => {
  return (
    <div className="app">
      <div>
        <Switch>
          <Route path="/auth">
            <AuthRoutes />
          </Route>
          <Route exact={false} path="/">
            <PrivateRoutes />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
