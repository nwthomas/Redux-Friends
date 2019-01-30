import React from "react";
import { Friend } from "../Friend";

const FriendsList = props => {
  return (
    <div className="friends-list__container">
      {props.friends.map(friend => {
        return <Friend friend={friend} />;
      })}
    </div>
  );
};

export default FriendsList;
