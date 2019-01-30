import React, { Component } from "react";
import { connect } from "react-redux";
import { getFriends } from "../store/actions";

class FriendsListView extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <button onClick={this.props.getFriends} type="button">
          Get Friends
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsListView);
