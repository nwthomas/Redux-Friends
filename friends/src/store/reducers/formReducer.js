import { UPDATE_INPUT_TEXT, CLEAR_FORM, START_FORM_UPDATE } from "../types";

const initialState = {
  inputName: "",
  inputAge: "",
  inputEmail: "",
  updatingID: "",
  inputBirthplace: "",
  inputFavColor: ""
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
        inputEmail: "",
        updatingID: "",
        inputBirthplace: "",
        inputFavColor: ""
      };
    case START_FORM_UPDATE:
      return {
        ...state,
        inputName: action.payload.inputName,
        inputAge: action.payload.inputAge,
        inputEmail: action.payload.inputEmail,
        updatingID: action.payload.updatingID,
        inputBirthplace: action.payload.inputBirthplace,
        inputFavColor: action.payload.inputFavColor
      };
    default:
      return state;
  }
};
