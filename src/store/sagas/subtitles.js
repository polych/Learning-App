import { call, put } from "redux-saga/effects";
import xml2js from "xml2js";
import { REQUEST_FAILED, SUBTITLES_SUCCES } from "../constans";
import API from "../API";

export function* fetchSubtitles(action) {
  let parser = new xml2js.Parser();
  try {
    const response = yield call(API.getSubtitles, action.payload);
    console.log(response);
    let subtitles;
    parser.parseString(response.data, function (err, result) {
      const arr = result.transcript.text.map((el) => {
        const objArr = Object.values(el);
        return {
          time: objArr[1],
          text: objArr[0],
        };
      });
      return (subtitles = arr);
    });
    yield put({
      type: SUBTITLES_SUCCES,
      payload: subtitles,
    });
  } catch (error) {
    yield put({
      type: REQUEST_FAILED,
    });
  }
}
