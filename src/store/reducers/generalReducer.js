import {
  SET_LANGUAGE,
  SEARCH_REQUEST,
  SEARCH_SUCCES,
  MAIN_REF,
  LANGUAGES_SUCCES,
} from "../constans";

const lang = JSON.parse(localStorage.getItem("language"));

const initState = {
  language: lang
    ? lang
    : {
        name: "English",
        value: "en",
      },
  load: false,
  mainRef: null,
  languages: null,
};
const general = (state = initState, action) => {
  switch (action.type) {
    case MAIN_REF:
      return {
        ...state,
        mainRef: action.payload,
      };
    case LANGUAGES_SUCCES:
      return {
        ...state,
        languages: action.payload,
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
