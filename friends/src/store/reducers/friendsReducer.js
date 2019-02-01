import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_ERROR,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_ERROR,
  DELETE_FRIEND_START,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_ERROR,
  UPDATE_FRIEND_START,
  UPDATE_FRIEND_SUCCESS,
  UPDATE_FRIEND_ERROR
} from "../types";

const initialState = {
  friends: [],
  fetchingFriends: false,
  friendsFetched: false,
  updatingFriend: false,
  friendUpdated: false,
  addingNewFriend: false,
  newFriendAdded: false,
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
    case DELETE_FRIEND_START:
      return {
        ...state,
        deletingFriend: true,
        error: ""
      };
    case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        friendDeleted: true,
        deletingFriend: false
      };
    case DELETE_FRIEND_ERROR:
      return {
        ...state,
        deletingFriend: false,
        error: action
      };
    case UPDATE_FRIEND_START:
      return state;
    case UPDATE_FRIEND_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        friends: action.payload
      };
    case UPDATE_FRIEND_ERROR:
      return state;
    default:
      return state;
  }
};
