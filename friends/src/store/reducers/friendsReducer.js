import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_ERROR,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_ERROR
} from "../types";

const initialState = {
  friends: [],
  fetchingFriends: false,
  friendsFetched: false,
  updatingFriend: true,
  friendUpdated: false,
  addingNewFriend: false,
  newFriendAdded: true,
  updateID: null,
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_START:
      return {
        ...state,
        fetchingFriends: true,
        friendsFetched: false,
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
    case ADD_FRIEND_START:
      return {
        ...state,
        addingNewFriend: true,
        error: ""
      };
    case ADD_FRIEND_SUCCESS:
      return {
        friends: action.payload,
        newFriendAdded: true,
        addingNewFriend: false,
        error: ""
      };
    case ADD_FRIEND_ERROR:
      return {
        ...state,
        addingNewFriend: false,
        newFriendAdded: false,
        error: action.payload
      };
    default:
      return state;
  }
};
