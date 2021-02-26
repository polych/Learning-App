import React from "react";
import "./index.scss";
import CategoryItem from "../../components/UiComponents/CategoryItem";
import SmVideoItem from "../../components/SmVideoItem";
const HomePage = () => {
  const handleClick = ({ target }) => {
    console.log(target.value);
  };
  return (
    <div>
      <h1 className="page_title">Home</h1>
      <div className="width_125 category_list">
        <CategoryItem value="value22" label="All" onClick={handleClick} />
        <CategoryItem
          value="value22"
          label="Architecture"
          onClick={handleClick}
        />
        <CategoryItem value="value22" label="All" onClick={handleClick} />
        <CategoryItem value="value22" label="All" onClick={handleClick} />
        <CategoryItem
          value="value22"
          label="Architecture"
          onClick={handleClick}
        />
        <CategoryItem value="value22" label="All" onClick={handleClick} />
        <CategoryItem value="value22" label="All" onClick={handleClick} />
        <CategoryItem value="value22" label="All" onClick={handleClick} />
        <CategoryItem value="value22" label="All" onClick={handleClick} />
        <CategoryItem value="value22" label="All" onClick={handleClick} />
        <CategoryItem value="value22" label="All" onClick={handleClick} />
        <CategoryItem value="value22" label="All" onClick={handleClick} />
        <CategoryItem value="value22" label="All" onClick={handleClick} />
        <CategoryItem value="value22" label="All" onClick={handleClick} />
      </div>
      <div>
        <div className="video_row">
          <div className="col_4">
            <SmVideoItem />
          </div>
          <div className="col_4">
            <SmVideoItem />
          </div>
          <div className="col_4">
            <SmVideoItem />
          </div>
          <div className="col_4">
            <SmVideoItem />
          </div>
          <div className="col_4">
            <SmVideoItem />
          </div>
          <div className="col_4">
            <SmVideoItem />
          </div>
          <div className="col_4">
            <SmVideoItem />
          </div>
          <div className="col_4">
            <SmVideoItem />
          </div>
          <div className="col_4">
            <SmVideoItem />
          </div>
          <div className="col_4">
            <SmVideoItem />
          </div>
          <div className="col_4">
            <SmVideoItem />
          </div>
          <div className="col_4">
            <SmVideoItem />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
