import React from "react";
import "./index.scss";
import google from "../../../static/images/google.svg";

const GoogleBtn = ({ handleClick }) => (
  <button type="button" onClick={handleClick} className="google_btn">
    <img src={google} alt="" />
    <span>Sign in with Google</span>
  </button>
);
export default GoogleBtn;
