import React, { useState } from "react";
import "./index.scss";
import { CSSTransition } from "react-transition-group";
import StudyItem from "../StudyItem";
import DeleteBtn from "../UiComponents/DeleteBtn";

const StudySheetGroup = () => {
  const [state, setState] = useState({
    show: false,
  });
  const handleToggle = () => {
    setState((prevState) => ({
      ...prevState,
      show: !prevState.show,
    }));
  };
  return (
    <li className="study_sheet_group">
      <div className="study_sheet_group_title">
        <div onClick={handleToggle}>
          <h2>Harry Potter and the Deathly Hallows - Part 1</h2>
          <div className="study_sheet_group_title_time">
            <h3>
              <span>Date:</span>
              <span> 11/11/2020 11:23 Am</span>
            </h3>
          </div>
          <div className={`triangle ${state.show ? "triangle_up" : ""}`}></div>
        </div>
        <DeleteBtn />
      </div>
      <CSSTransition
        in={state.show}
        timeout={10}
        unmountOnExit={true}
        mountOnEnter={true}
        classNames="list"
      >
        <ul>
          <StudyItem />
          <StudyItem text="asasdas dhbcb wikb dasdasdsa d" />
        </ul>
      </CSSTransition>
    </li>
  );
};

export default StudySheetGroup;
