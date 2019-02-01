import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../store/reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewareQueue = applyMiddleware(thunk, logger);

export const store = createStore(
  rootReducer,
  composeEnhancers(middlewareQueue)
);
