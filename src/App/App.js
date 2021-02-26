import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoutes from "../PrivateRoutes";
import "../styles/general.scss";
const App = () => {
  return (
    <div className="app">
      <div>
        <Switch>
          <Route path="/">
            <PrivateRoutes />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
