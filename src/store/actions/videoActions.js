import {
  SUBTITLES_REQUEST,
  TEXT_TRANSLATE_REQUEST,
  TEXT_TRANSLATE_SUCCES,
  SET_VIDEO_LANGUAGE,
  VIDEO_LANG_REQUEST,
} from "../constans";

export const getVideoLang = (id, lang) => ({
  type: VIDEO_LANG_REQUEST,
  payload: {
    id,
    lang,
  },
});
export const getSubtitles = (id) => ({
  type: SUBTITLES_REQUEST,
  payload: id,
});

export const fetchTextTranslate = (text) => ({
  type: TEXT_TRANSLATE_REQUEST,
  payload: text,
});
export const TextTranslateSucces = (text, translated) => ({
  type: TEXT_TRANSLATE_SUCCES,
  payload: {
    focusCaptions: text,
    translatedCaptions: translated,
  },
});
export const setVideoLang = (lang) => ({
  type: SET_VIDEO_LANGUAGE,
  payload: lang,
});
