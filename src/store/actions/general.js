import { MAIN_WRAP, SET_LANGUAGE } from "../constans";

export const setWrap = (wrap) => ({
  type: MAIN_WRAP,
  payload: wrap,
});

export const setLanguage = (value) => ({
  type: SET_LANGUAGE,
  payload: value,
});
