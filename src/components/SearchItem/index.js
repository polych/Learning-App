import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchItem = ({
  item: {
    snippet: { channelTitle, description, thumbnails, title },
    id: { videoId },
  },
}) => {
  const escapeHtml = (text) => {
    var map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    for (let key in map) {
      const reg = new RegExp(map[key], "g");
      text = text.replace(reg, key);
    }
    return text;
  };
  title = escapeHtml(title);
  const { language } = useSelector((state) => state.general);
  return (
    <Link to={`/view/${videoId}`} className="search_item">
      <div className="search_item_img">
        <img src={thumbnails.high.url} alt="" />
      </div>
      <div className="search_item_content">
        <h2>{title}</h2>
        <div className="search_item_author">
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt=""
          />
          <h4>{channelTitle}</h4>
        </div>
        <p className="search_item_dscr">{description}</p>
      </div>
    </Link>
  );
};

export default SearchItem;
