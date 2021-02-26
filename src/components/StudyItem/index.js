import React, { useState } from "react";
import "./index.scss";
import comment from "../../static/images/comment.svg";
import DeleteBtn from "../UiComponents/DeleteBtn";
const StudyItem = ({ text = "cat" }) => {
  const [height, setHeight] = useState(null);
  const handleChange = (event) => {
    setHeight(event.target.scrollHeight);
  };
  return (
    <li className="study_item">
      <p className="study_item_time">2:53</p>
      <p className="f_bold study_item_text">{text}</p>
      <p className="study_item_translate">{text}</p>
      <div className="study_item_comment">
        <img src={comment} alt="" />
        <textarea
          name="comment"
          placeholder="Leave your coments here"
          onChange={handleChange}
          style={{ height: height }}
        ></textarea>
      </div>
      <DeleteBtn />
    </li>
  );
};

export default StudyItem;
