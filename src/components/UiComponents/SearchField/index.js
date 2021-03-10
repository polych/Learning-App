import React, { useState } from "react";
import "./index.scss";
import SearchIcon from "../../icons/SearchIcon";
import { fetchSearch } from "../../../store/actions/searchActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const SerchField = ({ placeholder = "Search videos..." }) => {
  const [state, setState] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchSearch(state, history));
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
