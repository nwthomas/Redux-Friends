import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_ERROR
} from "../types";

const initialState = {
  friends: []
};

export const fetchFriendsReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_FRIENDS_START:
      return state;
    case FETCH_FRIENDS_SUCCESS:
      return state;
    case FETCH_FRIENDS_ERROR:
      return state;
    default:
      return state;
  }
};
