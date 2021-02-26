import React from "react";
import "./index.scss";
import camera from "../../static/images/camera.svg";

const SubtitleItem = ({ text, time, activeClass }) => {
  return (
    <li className={`subtitle_item ${activeClass}`}>
      <div className="align_center">
        <img src={camera} alt="" />
        <span>{time.start}</span>
      </div>
      <p>{text}</p>
    </li>
  );
};

export default SubtitleItem;
