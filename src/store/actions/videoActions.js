import { SUBTITLES_REQUEST, FOCUS_CAPTIONS } from "../constans";

export const getSubtitles = (id) => ({
  type: SUBTITLES_REQUEST,
  payload: id,
});

export const focusCaptions = (text) => ({
  type: FOCUS_CAPTIONS,
  payload: text,
});
