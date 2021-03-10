import {
  SUBTITLES_SUCCES,
  FOCUS_CAPTIONS,
  TEXT_TRANSLATE_SUCCES,
} from "../constans";
const initState = {
  subtitles: {
    subtitlesTranslated: null,
    subtitlesOriginal: null,
  },
  focusCaptions: null,
  translatedCaptions: null,
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
    case TEXT_TRANSLATE_SUCCES:
      return {
        ...state,
        focusCaptions: action.payload.focusCaptions,
        translatedCaptions: action.payload.translatedCaptions,
      };
    default:
      return state;
  }
};
export default videoReducer;
