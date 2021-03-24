import React, { useState } from "react";
import "./index.scss";
import Select from "../../components/UiComponents/Select";
import SearchIcon from "../../components/icons/SearchIcon";
import StudySheetGroup from "../../components/StudySheetGroup";

const select2 = {
  defaultSelectText: "Date",
  list: [
    {
      value: "date",
      name: "Date",
    },
    {
      value: "Transcription",
      name: "Transcription",
    },
    {
      value: "Translation",
      name: "Translation",
    },
    {
      value: "Source Content",
      name: "Source Content",
    },
  ],
};
const SheetsPage = () => {
  const [searchVal, setSearchVal] = useState(null);
  const handleChange = ({ target }) => {
    setSearchVal(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchVal);
  };
  return (
    <div className="study_sheet_page">
      <h1 className="page_title">Study sheets </h1>
      <div className="study_sheet_header">
        <form className="sheets_search" onSubmit={handleSubmit}>
          <div className="sheets_search_field">
            <SearchIcon />
            <input
              type="text"
              placeholder="Enter the word you are searching for...  "
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="form_btn">
            Search
          </button>
        </form>
        <Select
          optionsList={select2.list}
          defaultText={select2.defaultSelectText}
        >
          <p>Sort by</p>
        </Select>
      </div>
      <div className="grey_line"></div>
      <div className="study_sheet_section">
        <ul>
          <StudySheetGroup />
          <StudySheetGroup />
          <StudySheetGroup />
        </ul>
      </div>
    </div>
  );
};

export default SheetsPage;
