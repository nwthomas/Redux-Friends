import React from "react";
import PropTypes from "prop-types";

const Friend = props => {
  console.log(props.friend);
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
