import { friendsReducer } from "./friendsReducer";
import { formReducer } from "./formReducer";
import { combineReducers } from "redux";

export default combineReducers({
  friendsReducer,
  formReducer
});
