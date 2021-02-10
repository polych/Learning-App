import { MAIN_WRAP, SET_LANGUAGE } from "../constans";

const initState = {
  mainWrap: null,
  language: "Ukrainian",
};
const general = (state = initState, action) => {
  switch (action.type) {
    case MAIN_WRAP:
      return {
        ...state,
        mainWrap: action.payload,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};
export default general;
