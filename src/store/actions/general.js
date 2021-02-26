import { SET_LANGUAGE, MAIN_REF } from "../constans";

export const setLanguage = (value) => ({
  type: SET_LANGUAGE,
  payload: value,
});
export const mainRefAction = (ref) => ({
  type: MAIN_REF,
  payload: ref,
});
