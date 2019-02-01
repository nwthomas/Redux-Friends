import React from "react";
import { Friend } from "../Friend";
import PropTypes from "prop-types";

const FriendsList = props => {
  return (
    <div className="friends-list__container">
      {props.friends.map((friend, index) => {
        return <Friend friend={friend} key={`friend${index}`} />;
      })}
    </div>
  );
};

FriendsList.propType = {
  friend: PropTypes.object
};

export default FriendsList;
