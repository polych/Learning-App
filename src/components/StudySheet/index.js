import React, { useState } from "react";
import "./index.scss";
import sheets from "../../static/images/sheets2.svg";
import deleteIcon from "../../static/images/deleteIcon.svg";
import RoundedBtn from "../UiComponents/RoundedBtn";

const StudySheet = () => {
  const [show, setShow] = useState(false);
  const showFunc = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className={`notes_section ${show ? "notes_section_active" : ""}`}>
      <div className="notes_header" onClick={showFunc}>
        <button type="button">
          <img src={sheets} alt="" />
        </button>
        <h3>Study sheet</h3>
      </div>
      <ul className="notes_list">
        <li>
          <p>
            <span className="notes_time">1:30</span>
            <span className="notes_word">Heating</span>
            <span className="margin_5">-</span>
            <span className="notes_trns">обогревает, греет</span>
          </p>
          <button type="button">
            <img src={deleteIcon} alt="" />
          </button>
        </li>
        <li>
          <p>
            <span className="notes_time">1:30</span>
            <span className="notes_word">Heating</span>
            <span className="margin_5">-</span>
            <span className="notes_trns">обогревает, греет</span>
          </p>
          <button type="button">
            <img src={deleteIcon} alt="" />
          </button>
        </li>
        <li>
          <p>
            <span className="notes_time">1:30</span>
            <span className="notes_word">Heating</span>
            <span className="margin_5">-</span>
            <span className="notes_trns">обогревает, греет</span>
          </p>
          <button type="button">
            <img src={deleteIcon} alt="" />
          </button>
        </li>
        <li>
          <p>
            <span className="notes_time">1:30</span>
            <span className="notes_word">Heating</span>
            <span className="margin_5">-</span>
            <span className="notes_trns">обогревает, греет</span>
          </p>
          <button type="button">
            <img src={deleteIcon} alt="" />
          </button>
        </li>
      </ul>
      <RoundedBtn type="button" value="View sheet" />
    </div>
  );
};
export default StudySheet;
