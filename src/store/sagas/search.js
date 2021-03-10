import { call, put, select } from "redux-saga/effects";
import { SEARCH_SUCCES, SEARCH_FAILED, SCROLL_SUCCES } from "../constans";
import API from "../API";

export function* fetchSearch(action) {
  try {
    const response = yield call(API.search, action.payload);
    yield put({
      type: SEARCH_SUCCES,
      payload: {
        data: response.data,
        query: action.payload,
      },
    });
  } catch (error) {
    yield put({
      type: SEARCH_FAILED,
    });
  }
}
export function* scrollSearch(action) {
  const {
    searchReducer: { nextPage, searchResults, query },
  } = yield select();
  const newarr = [...searchResults];
  try {
    const response = yield call(API.searchPagination, query, nextPage);
    yield put({
      type: SCROLL_SUCCES,
      payload: {
        items: [...newarr, ...response.data.items],
        nextPageToken: response.data.nextPageToken,
      },
    });
  } catch (error) {
    yield put({
      type: SEARCH_FAILED,
    });
  }
}
