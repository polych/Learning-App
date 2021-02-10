import { call, put, select } from "redux-saga/effects";
import axios from "axios";
import { SEARCH_SUCCES, SEARCH_FAILED, SCROLL_SUCCES } from "../constans";

const getHttpHeaders = () => {
  return {
    "Content-Type": "application/json",
  };
};
const getConfig = () => ({ headers: getHttpHeaders() });

const apiFunc = (query, page) => {
  const url = page
    ? `http://cq29081-django.tw1.ru/api/v1/search-by-name/${query}?page=${page}`
    : `http://cq29081-django.tw1.ru/api/v1/search-by-name/${query}`;
  console.log(url);
  return axios.get(url, getConfig());
};

export function* fetchSearch(action) {
  try {
    const response = yield call(apiFunc, action.payload);
    console.log(response)
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
    const response = yield call(apiFunc, query, nextPage);
    const newobj = {
      items: [...newarr, ...response.data.items],
      nextPageToken: response.data.nextPageToken,
    };
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
