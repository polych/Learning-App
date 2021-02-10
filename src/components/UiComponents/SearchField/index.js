import React, { useState } from "react";
import "./index.scss";
import SearchIcon from "../../icons/SearchIcon";
import { fetchSearch } from "../../../store/actions/searchActions";
import { useDispatch } from "react-redux";
const SerchField = ({
  placeholder = "Enter the word you are searching for...  ",
}) => {
  const [state, setState] = useState(null);

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchSearch(state));
  };
  const handleChange = (event) => {
    setState(event.target.value);
  };
  return (
    <form className="search_filed" onSubmit={handleSubmit}>
      <input type="text" placeholder={placeholder} onChange={handleChange} />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};
export default SerchField;
