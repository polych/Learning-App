import React from "react";
import { Link } from "react-router-dom";
import MenuList from "../MenuList";
import "./index.scss";

const Menu = () => {
  return (
    <div className="side_menu_wrap">
      <div className="side_menu">
        <Link to="/" className="side_menu_logo">
          <h3>Logo</h3>
        </Link>
        <MenuList />
      </div>
    </div>
  );
};
export default Menu;
