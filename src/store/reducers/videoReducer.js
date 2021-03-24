import {
  SUBTITLES_SUCCES,
  FOCUS_CAPTIONS,
  TEXT_TRANSLATE_SUCCES,
  VIDEO_LANG_SUCCES,
} from "../constans";
const initState = {
  subtitles: {
    subtitlesTranslated: null,
    subtitlesOriginal: null,
    languages: {
      original_lang: "en",
      translated_to: "uk",
    },
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
    case VIDEO_LANG_SUCCES: {
      console.log(action.payload);
      return {
        ...state,
        subtitles: {
          ...state.subtitles,
          languages: {
            ...state.subtitles.languages,
            original_lang: action.payload,
          },
        },
      };
    }
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
