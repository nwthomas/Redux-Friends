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
      <h2 className="friend__name">{props.friend.name}</h2>
      <p className="friend__age">Age: {props.friend.age}</p>
      <p className="friend__color">
        Favorite Color: {props.friend.favoriteColor}
      </p>
      <p className="friend__email">Email: {props.friend.email}</p>
      <p className="friend__birthplace">
        Birthplace: {props.friend.birthplace}
      </p>
      <div className="friend__buttons">
        <button className="btn" type="button" onClick={startUpdateFriend}>
          Update
        </button>
        <button className="btn" type="button" onClick={deleteFriend}>
          Delete
        </button>
      </div>
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
