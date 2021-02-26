import {
  SET_LANGUAGE,
  SEARCH_REQUEST,
  SEARCH_SUCCES,
  MAIN_REF,
} from "../constans";

const initState = {
  language: "Ukrainian",
  load: false,
  mainRef: null,
};
const general = (state = initState, action) => {
  switch (action.type) {
    case MAIN_REF:
      return {
        ...state,
        mainRef: action.payload,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case SEARCH_REQUEST:
      return {
        ...state,
        load: true,
      };
    case SEARCH_SUCCES:
      return {
        ...state,
        load: false,
      };
    default:
      return state;
  }
};
export default general;
