import React from "react";
import { connect } from "react-redux";
import { getFriends } from "../store/actions";

const FriendsListView = props => {
  return (
    <div>
      <button onClick={props.getFriends} type="button">
        Get Friends
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    friends: state.fetchFriendsReducer.friends
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsListView);
