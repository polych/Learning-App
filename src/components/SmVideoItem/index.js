import React, { memo } from "react";
import { Link } from "react-router-dom";
import FilmIcon from "../icons/FilmIcon";
import image from "../../static/images/dd.png";
import "./index.scss";

const SmVideoItem = memo(() => {
  return (
    <Link className="sm_video_item" to="/">
      <div className="sm_video_item_img">
        <img src={image} alt="" />
      </div>
      <div className="sm_video_item_title">
        <FilmIcon />
        <p>
          Daneliya Tuleshova: 13-Year-Old Rising Star From Kazakhstan WOWS
          America With...
        </p>
      </div>
    </Link>
  );
});

export default SmVideoItem;
