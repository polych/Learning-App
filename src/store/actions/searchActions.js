import { SEARCH_REQUEST, SEARCH_SCROLL_REQUEST } from "../constans";

export const fetchSearch = (payload, history) => {
  history.push("/search");
  return {
    type: SEARCH_REQUEST,
    payload: payload,
  };
};

export const scrollSearch = () => {
  return {
    type: SEARCH_SCROLL_REQUEST,
  };
};
