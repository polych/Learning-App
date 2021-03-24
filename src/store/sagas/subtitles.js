import { call, put, select } from "redux-saga/effects";
import {
  REQUEST_FAILED,
  SUBTITLES_SUCCES,
  LANGUAGES_SUCCES,
  VIDEO_LANG_SUCCES,
  SUBTITLES_REQUEST,
} from "../constans";
import { TextTranslateSucces } from "../actions/videoActions";
import API from "../API";

export function* videoLang(action) {
  try {
    yield put({
      type: VIDEO_LANG_SUCCES,
      payload: action.payload.lang,
    });
    yield put({
      type: SUBTITLES_REQUEST,
      payload: action.payload.id,
    });
  } catch (error) {
    yield put({
      type: REQUEST_FAILED,
    });
  }
}

export function* fetchSubtitles(action) {
  const state = yield select();
  const lang = state.video.subtitles.languages.original_lang;
  const obj = {
    id: action.payload,
    from: lang,
    to: state.general.language.snippet.hl,
  };
  try {
    const response = yield call(API.getSubtitles, obj);
    yield put({
      type: SUBTITLES_SUCCES,
      payload: {
        languages: response.data[0],
        subtitlesOriginal: response.data[1].original,
        subtitlesTranslated: response.data[2].translation,
        videoLangues: response.data[0].languages,
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
      payload: response.data.items,
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
