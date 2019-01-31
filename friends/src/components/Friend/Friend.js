import React from "react";
import PropTypes from "prop-types";
import "./_Friend.scss";
import { connect } from "react-redux";
import { deleteFriend } from "../../store/actions";

const Friend = props => {
  const deleteFriend = e => {
    e.preventDefault();
    props.deleteFriend(props.friend.id);
  };

  return (
    <div className="friend">
      <h2>{props.friend.name}</h2>
      <p>{props.friend.age}</p>
      <p>{props.friend.favoriteColor}</p>
      <p>{props.friend.email}</p>
      <p>{props.friend.birthplace}</p>
      <button type="button" onClick={deleteFriend}>
        Delete
      </button>
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

export default connect(
  null,
  { deleteFriend }
)(Friend);
