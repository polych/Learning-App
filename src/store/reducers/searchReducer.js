import { SEARCH_SUCCES, SCROLL_SUCCES } from "../constans";
const initState = {
  searchResults: null,
};
const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_SUCCES:
      return {
        ...state,
        nextPage: action.payload.data.nextPageToken,
        searchResults: action.payload.data.items,
        query: action.payload.query,
      };
    case SCROLL_SUCCES:
      return {
        ...state,
        nextPage: action.payload.data.nextPageToken,
        searchResults: action.payload.data.items,
      };
    default:
      return state;
  }
};
export default searchReducer;
