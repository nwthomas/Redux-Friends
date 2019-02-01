import React from "react";
import PropTypes from "prop-types";
import "./_Friend.scss";
import { connect } from "react-redux";
import { deleteFriend, startUpdate } from "../../store/actions";

const Friend = props => {
  const deleteFriend = e => {
    e.preventDefault();
    props.deleteFriend(props.friend.id);
  };

  const startUpdateFriend = e => {
    e.preventDefault();
    props.startUpdate(props.friend);
  };

  return (
    <div className="friend">
      <h2>{props.friend.name}</h2>
      <p>Age: {props.friend.age}</p>
      <p>Favorite Color: {props.friend.favoriteColor}</p>
      <p>Email: {props.friend.email}</p>
      <p>Birthplace: {props.friend.birthplace}</p>
      <button type="button" onClick={startUpdateFriend}>
        Update
      </button>
      <button type="button" onClick={deleteFriend}>
        Delete
      </button>
    </div>
  );
};

const mapActionsToProps = {
  deleteFriend,
  startUpdate
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
  mapActionsToProps
)(Friend);
