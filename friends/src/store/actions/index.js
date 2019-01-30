import axios from "axios";
import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_ERROR
} from "../types";

export const getFriends = _ => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axios
    .get("http://localhost:5000/api/friends")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FRIENDS_ERROR, payload: err.data });
    });
};
