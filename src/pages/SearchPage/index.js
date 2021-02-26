import React, { useEffect, useRef } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";
import SearchItem from "../../components/SearchItem";
import { scrollSearch } from "../../store/actions/searchActions";
import Loader from "../../components/UiComponents/Loader";

const SearchPage = () => {
  const dispatch = useDispatch();
  const {
    searchReducer: { searchResults, nextPage },
    general: { mainRef, load },
  } = useSelector((state) => state);
  const updateScroll = () => {
    dispatch(scrollSearch());
  };
  const debounced = useDebouncedCallback(updateScroll, 300);
  const eventHandler = (event) => {
    const fullHeight = event.target.scrollHeight;
    const height = event.target.clientHeight;
    const top = event.target.scrollTop;
    const scrollToEnd = top + height;
    if (scrollToEnd === fullHeight) {
      debounced.callback();
    }
  };
  useEffect(() => {
    if (mainRef) {
      mainRef.addEventListener("scroll", eventHandler);

      return () => mainRef.removeEventListener("wheel", eventHandler);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainRef]);
  return (
    <div className="search_page">
      <h1 className="page_title">Search</h1>
      {load ? (
        <Loader />
      ) : (
        searchResults &&
        searchResults.map((el, i) => (
          <SearchItem item={el} key={`el.id.videoId${i}`} />
        ))
      )}
    </div>
  );
};

export default SearchPage;
