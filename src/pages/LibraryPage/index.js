import React from "react";
import SmVideoItem from "../../components/SmVideoItem";
const LibraryPage = () => {
  return (
    <div>
      <h1 className="page_title">Library</h1>
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
export default LibraryPage;
