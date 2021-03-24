import React from "react";
import "./index.scss";
const LangBtn = ({ val, langModalShow }) => {
  const handleClick = () => {
    langModalShow(true);
  };
  return (
    <button onClick={handleClick} className="lang_btn">
      {val}
    </button>
  );
};

export default LangBtn;
