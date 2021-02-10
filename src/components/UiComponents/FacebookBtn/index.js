import React from "react";
import "./index.scss";
import facebook from "../../../static/images/facebook.svg";

const FacebookBtn = ({ handleClick }) => (
  <button type="button" onClick={handleClick} className="facebook_btn">
    <img src={facebook} alt="" />
  </button>
);
export default FacebookBtn;
