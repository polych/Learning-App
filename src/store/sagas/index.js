import { takeLatest } from "redux-saga/effects";
import { SEARCH_REQUEST, SEARCH_SCROLL_REQUEST } from "../constans";
import { fetchSearch, scrollSearch } from "./search";

export default function* watchAllSearch() {
  yield takeLatest(SEARCH_REQUEST, fetchSearch);
  yield takeLatest(SEARCH_SCROLL_REQUEST, scrollSearch);
}
