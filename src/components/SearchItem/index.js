import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import CategoryItem from "../UiComponents/CategoryItem";
import { useSelector } from "react-redux";

const SearchItem = ({
  item: {
    snippet: { channelTitle, description, thumbnails, title },
  },
}) => {
  const { language } = useSelector((state) => state.general);
  return (
    <Link to="/" className="search_item">
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
        <div className="">
          <CategoryItem label="English" value="Eng" />
          <CategoryItem label={language} value={language} />
        </div>
      </div>
    </Link>
  );
};

export default SearchItem;
