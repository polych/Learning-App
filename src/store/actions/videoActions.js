import {
  SUBTITLES_REQUEST,
  FOCUS_CAPTIONS,
  TEXT_TRANSLATE_REQUEST,
  TEXT_TRANSLATE_SUCCES,
} from "../constans";

export const getSubtitles = (id) => ({
  type: SUBTITLES_REQUEST,
  payload: id,
});

export const focusCaptions = (text) => ({
  type: FOCUS_CAPTIONS,
  payload: text,
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
