import React, { useEffect, useRef } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import SearchItem from "../../components/SearchItem";
import { scrollSearch } from "../../store/actions/searchActions";
const SearchPage = () => {
  const ref = useRef({ current: null });
  const arch = useRef({ current: null });
  const dispatch = useDispatch();
  const {
    searchReducer: { searchResults, nextPage },
    general: { mainWrap },
  } = useSelector((state) => state);
  useEffect(() => {
    if (mainWrap) {
      document.addEventListener("scroll", (event) => {
        const scroll =
          document.documentElement.scrollTop +
          document.documentElement.clientHeight;
        const height = mainWrap.current.scrollHeight;
        if (scroll >= height) {
          // dispatch(scrollSearch());
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainWrap]);
  const func = () => {};
  return (
    <div className="search_page" ref={ref} onClick={func}>
      <h1 className="page_title">Search</h1>
      {searchResults &&
        searchResults.map((el, i) => (
          <SearchItem item={el} key={`el.id.videoId${i}`} />
        ))}
      <span ref={arch}></span>
    </div>
  );
};

export default SearchPage;
