import { createStore, applyMiddleware } from "redux";
import rootReducer from "../store/reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middlewareQueue = applyMiddleware(thunk,logger);

export const store = createStore(rootReducer, middlewareQueue);
