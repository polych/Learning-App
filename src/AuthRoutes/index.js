import React from "react";
import { Redirect } from "react-router-dom";

const user = true;
const AuthRoutes = () => {
  return user ? <Redirect to="/" /> : <div>auth</div>;
};
export default AuthRoutes;
