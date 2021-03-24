import React, { useRef, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mainRefAction } from "../store/actions/general";
import ViewPage from "../pages/ViewPage";
import HomePage from "../pages/HomePage";
import Header from "../components/headerComponents/Header";
import Menu from "../components/menuComponents/Menu";
import SheetsPage from "../pages/SheetsPage";
import SearchPage from "../pages/SearchPage";

const PrivateRoutes = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const mainRef = useRef(null);
  const mobile = window.innerWidth < 768;
  useEffect(() => {
    dispatch(mainRefAction(mainRef.current));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainRef]);
  return user ? (
    <>
      {!mobile && <Menu />}
      <main ref={mainRef}>
        <Header mobile={mobile} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/view/:id" component={ViewPage} />
          <Route exact path="/sheets" component={SheetsPage} />
          <Route exact path="/search" component={SearchPage} />
        </Switch>
      </main>
    </>
  ) : (
    <Redirect to="/auth/signin" />
  );
};
export default PrivateRoutes;
