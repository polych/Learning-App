import { call, put, select } from "redux-saga/effects";
import {
  REQUEST_FAILED,
  SUBTITLES_SUCCES,
  LANGUAGES_SUCCES,
} from "../constans";
import { TextTranslateSucces } from "../actions/videoActions";
import API from "../API";

export function* fetchSubtitles(action) {
  const state = yield select();
  const obj = {
    id: action.payload,
    language: state.general.language.value,
  };
  try {
    const response = yield call(API.getSubtitles, obj);
    yield put({
      type: SUBTITLES_SUCCES,
      payload: {
        languages: response.data[0],
        subtitlesOriginal: response.data[1].original,
        subtitlesTranslated: response.data[2].translation,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: REQUEST_FAILED,
    });
  }
}
export function* fetchLanguages() {
  try {
    const response = yield call(API.getLanguages, {});
    yield put({
      type: LANGUAGES_SUCCES,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: REQUEST_FAILED,
    });
  }
}
export function* fetchTranslate(action) {
  const state = yield select();
  const obj = {
    text: action.payload,
    from: state.video.subtitles.languages.original_lang,
    to: state.video.subtitles.languages.translated_to,
  };
  try {
    const response = yield call(API.textTranslate, obj);
    yield put(
      TextTranslateSucces(
        action.payload,
        response.data.responseData.translatedText
      )
    );
  } catch (error) {
    yield put({
      type: REQUEST_FAILED,
    });
  }
}
