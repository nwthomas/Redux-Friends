import React, { Component } from "react";
import { connect } from "react-redux";
import { getFriends } from "../store/actions";
import { FriendsList } from "../components/FriendsList";
import PropTypes from "prop-types";

class FriendsListView extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <FriendsList friends={this.props.friends} />
      </div>
    );
  }
}

FriendsListView.propTypes = {
  friends: PropTypes.object
};

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsListView);
