import { SUBTITLES_SUCCES, FOCUS_CAPTIONS } from "../constans";
const initState = {
  subtitles: null,
  focusCaptions: null,
};
const videoReducer = (state = initState, action) => {
  switch (action.type) {
    case SUBTITLES_SUCCES:
      return {
        ...state,
        subtitles: action.payload,
      };
    case FOCUS_CAPTIONS:
      return {
        ...state,
        focusCaptions: action.payload,
      };
    default:
      return state;
  }
};
export default videoReducer;
