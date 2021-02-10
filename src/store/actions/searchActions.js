import { SEARCH_REQUEST, SEARCH_SCROLL_REQUEST } from "../constans";

export const fetchSearch = (payload) => {
  return {
    type: SEARCH_REQUEST,
    payload: payload,
  };
};

export const scrollSearch = (payload) => {
  return {
    type: SEARCH_SCROLL_REQUEST,
    payload: payload,
  };
};
