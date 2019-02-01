import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addFriend,
  handleFormChange,
  clearForm,
  updateFriend
} from "../../store/actions";

class FriendsForm extends Component {
  handleChange = e => {
    this.props.handleFormChange(e);
  };

  submitFriend = e => {
    e.preventDefault();
    if (this.props.updatingID) {
      this.props.updateFriend(
        {
          id: this.props.updatingID,
          name: this.props.inputName,
          age: this.props.inputAge,
          email: this.props.inputEmail,
          favoriteColor: this.props.inputFavColor,
          birthplace: this.props.inputBirthplace
        },
        () => this.props.clearForm()
      );
    } else {
      this.props.addFriend(
        {
          id: this.props.friends.length + 1,
          name: this.props.inputName,
          age: this.props.inputAge,
          email: this.props.inputEmail,
          favoriteColor: this.props.inputFavColor,
          birthplace: this.props.inputBirthplace
        },
        () => this.props.clearForm()
      );
    }
  };

  clearForm = e => {
    e.preventDefault();
    this.props.clearForm();
  };

  render() {
    return (
      <form onSubmit={this.submitFriend}>
        <input
          required
          type="text"
          value={this.props.inputName}
          name="inputName"
          onChange={this.handleChange}
          placeholder="Name"
        />
        <input
          required
          type="text"
          value={this.props.inputAge}
          name="inputAge"
          onChange={this.handleChange}
          placeholder="Age"
        />
        <input
          required
          type="text"
          value={this.props.inputBirthplace}
          name="inputBirthplace"
          onChange={this.handleChange}
          placeholder="Birthplace"
        />
        <input
          required
          type="text"
          value={this.props.inputEmail}
          name="inputEmail"
          onChange={this.handleChange}
          placeholder="Email"
        />
        <input
          required
          type="text"
          value={this.props.inputFavColor}
          name="inputFavColor"
          onChange={this.handleChange}
          placeholder="Favorite color"
        />
        <button type="submit">
          {this.props.updatingID ? "Update Friend" : "Submit"}
        </button>
        <button onClick={this.clearForm} type="button">
          Clear
        </button>
      </form>
    );
  }
}

// FriendsForm.propTypes = {
//   updatingFriend: PropTypes.bool.isRequired
// };

const mapStateToProps = state => {
  return {
    updatingFriend: state.friendsReducer.updatingFriend,
    friends: state.friendsReducer.friends,
    inputName: state.formReducer.inputName,
    inputAge: state.formReducer.inputAge,
    inputEmail: state.formReducer.inputEmail,
    updatingID: state.formReducer.updatingID,
    inputBirthplace: state.formReducer.inputBirthplace,
    inputFavColor: state.formReducer.inputFavColor
  };
};

const mapActionsToProps = {
  addFriend,
  handleFormChange,
  clearForm,
  updateFriend
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(FriendsForm);
