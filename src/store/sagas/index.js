import { takeLatest } from "redux-saga/effects";
import {
  SEARCH_REQUEST,
  SEARCH_SCROLL_REQUEST,
  SUBTITLES_REQUEST,
  LANGUAGES_REQUEST,
  TEXT_TRANSLATE_REQUEST,
  VIDEO_LANG_REQUEST,
} from "../constans";
import { fetchSearch, scrollSearch } from "./search";
import {
  fetchSubtitles,
  fetchLanguages,
  fetchTranslate,
  videoLang,
} from "./subtitles";

export default function* watchAll() {
  yield takeLatest(SEARCH_REQUEST, fetchSearch);
  yield takeLatest(SEARCH_SCROLL_REQUEST, scrollSearch);
  yield takeLatest(SUBTITLES_REQUEST, fetchSubtitles);
  yield takeLatest(LANGUAGES_REQUEST, fetchLanguages);
  yield takeLatest(TEXT_TRANSLATE_REQUEST, fetchTranslate);
  yield takeLatest(VIDEO_LANG_REQUEST, videoLang);
}
