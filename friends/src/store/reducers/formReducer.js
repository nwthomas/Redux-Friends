import { UPDATE_INPUT_TEXT, CLEAR_FORM } from "../types";

const initialState = {
  inputName: "",
  inputAge: "",
  inputEmail: ""
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT_TEXT:
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value
      };
    case CLEAR_FORM:
      return {
        ...state,
        inputName: "",
        inputAge: "",
        inputEmail: ""
      };
    default:
      return state;
  }
};
