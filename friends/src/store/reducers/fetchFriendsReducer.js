import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_ERROR
} from "../types";

const initialState = {
  friends: [],
  fetchingFriends: false,
  friendsFetched: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_START:
      return {
        ...state,
        fetchingFriends: true,
        error: ""
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friendsFetched: true,
        friends: action.payload,
        error: ""
      };
    case FETCH_FRIENDS_ERROR:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
      };
    default:
      return state;
  }
};
