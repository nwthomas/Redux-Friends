import React, { Component } from "react";
import { connect } from "react-redux";
import { getFriends } from "../store/actions";
import { FriendsList } from "../components/FriendsList";
import { FriendsForm } from "../components/FriendsForm";
import PropTypes from "prop-types";
class FriendsListView extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <FriendsForm />
        <FriendsList friends={this.props.friends} />
      </div>
    );
  }
}

FriendsListView.propTypes = {
  friends: PropTypes.array
};

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends
  };
};

const mapActionsToProps = {
  getFriends
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(FriendsListView);
