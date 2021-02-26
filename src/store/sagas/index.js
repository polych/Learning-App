import { takeLatest } from "redux-saga/effects";
import {
  SEARCH_REQUEST,
  SEARCH_SCROLL_REQUEST,
  SUBTITLES_REQUEST,
} from "../constans";
import { fetchSearch, scrollSearch } from "./search";
import { fetchSubtitles } from "./subtitles";

export default function* watchAll() {
  yield takeLatest(SEARCH_REQUEST, fetchSearch);
  yield takeLatest(SEARCH_SCROLL_REQUEST, scrollSearch);
  yield takeLatest(SUBTITLES_REQUEST, fetchSubtitles);
}
