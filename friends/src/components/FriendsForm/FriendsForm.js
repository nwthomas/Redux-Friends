import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addFriend, handleFormChange, clearForm } from "../../store/actions";

class FriendsForm extends Component {
  handleChange = e => {
    this.props.handleFormChange(e);
  };

  submitFriend = e => {
    e.preventDefault();
    this.props.addFriend(
      {
        id: this.props.friends.length + 1,
        name: this.props.inputName,
        age: this.props.inputAge,
        email: this.props.inputEmail
      },
      () => this.props.clearForm()
    );
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
          value={this.props.inputEmail}
          name="inputEmail"
          onChange={this.handleChange}
          placeholder="Email"
        />
        <button type="submit">
          {this.props.updatingFriend ? "Update Friend" : "Submit"}
        </button>
        <button type="button">Cancel</button>
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
    inputEmail: state.formReducer.inputEmail
  };
};

const mapActionsToProps = {
  addFriend,
  handleFormChange,
  clearForm
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(FriendsForm);
