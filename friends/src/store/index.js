import { createStore, applyMiddleware } from "redux";
import rootReducer from "../store/reducers";
import thunk from "redux-thunk";
// import logger from "redux-logger"; logger

const middlewareQueue = applyMiddleware(thunk);

export const store = createStore(rootReducer, middlewareQueue);
