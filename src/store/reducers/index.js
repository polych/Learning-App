import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import general from "./generalReducer";
import user from "./userReducer";
import video from "./videoReducer";

const rootReducer = combineReducers({ video, searchReducer, general, user });

export default rootReducer;
