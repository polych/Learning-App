import React, { useEffect, useState, useRef } from "react";
import { v4 } from "uuid";
import "./index.scss";
import arrow from "../../../static/images/arrowDown.svg";

const Select = ({ children, optionsList, defaultText }) => {
  const [state, setState] = useState({
    labelText: "",
    showOptionList: false,
    optionsList: [],
  });
  const blockRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    setState({
      labelText: defaultText,
    });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // This method handles the click that happens outside the
  // select text and list area
  const handleClickOutside = (event) => {
    if (blockRef.current && !blockRef.current.contains(event.target)) {
      setState((prevState) => {
        return {
          ...prevState,
          showOptionList: false,
        };
      });
    }
  };

  // This method handles the display of option list
  const handleListDisplay = () => {
    setState((prevState) => {
      return {
        ...prevState,
        showOptionList: !prevState.showOptionList,
      };
    });
  };

  // This method handles the setting of name in select text area
  // and list display on selection
  const handleOptionClick = (e) => {
    setState({
      labelText: e.target.getAttribute("data-name"),
      showOptionList: false,
    });
  };
  const { showOptionList, labelText } = state;
  return (
    <div className="select_container" ref={blockRef}>
      <div
        className={`select_label${showOptionList ? " select_label_active" : ""}
        `}
        onClick={handleListDisplay}
      >
        {children}
        <div>
          <p>{labelText}</p>
          <img src={arrow} alt="" className="arrow_img" />
        </div>
      </div>
      {showOptionList && (
        <ul className="select_options">
          {optionsList.map((option) => {
            return (
              <li
                data-name={option.value}
                key={v4()}
                onClick={handleOptionClick}
                className={labelText === option.name ? "active_option" : ""}
              >
                {option.icon}
                {option.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Select;
