import { MAIN_REF, LANGUAGES_REQUEST, SET_LANGUAGE } from "../constans";

export const fetchLanguages = () => ({
  type: LANGUAGES_REQUEST,
});
export const setLanguage = (lang) => {
  localStorage.setItem("language", JSON.stringify(lang));
  return {
    type: SET_LANGUAGE,
    payload: lang,
  };
};
export const mainRefAction = (ref) => ({
  type: MAIN_REF,
  payload: ref,
});
