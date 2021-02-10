import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../components/headerComponents/Header";
import Menu from "../components/menuComponents/Menu";
import SearchPage from "../pages/SearchPage";
import { setWrap } from "../store/actions/general";
const user = true;
const PrivateRoutes = () => {
  const dispatch = useDispatch();
  const mobile = window.innerWidth < 768;
  const main = useRef(null);
  useEffect(() => {
    dispatch(setWrap(main));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [main]);
  return user ? (
    <>
      {!mobile && <Menu />}
      <main ref={main}>
        <Header mobile={mobile} />
        <Switch>
          <Route exact path="/" component={SearchPage} />
        </Switch>
      </main>
    </>
  ) : (
    <Redirect to="/auth/signin" />
  );
};
export default PrivateRoutes;
