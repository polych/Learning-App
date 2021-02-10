import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import general from "./generalReducer";
const rootReducer = combineReducers({ searchReducer, general });

export default rootReducer;
