import React from "react";
import PropTypes from "prop-types";
import "./_Friend.scss";

const Friend = props => {
  return (
    <div className="friend">
      <h2>{props.friend.name}</h2>
      <p>{props.friend.age}</p>
      <p>{props.friend.email}</p>
    </div>
  );
};

Friend.propTypes = {
  friends: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  })
};

export default Friend;
