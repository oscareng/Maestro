import { createStore, applyMiddleware, combineReducers } from "redux";
import axios from "axios";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import userReducer from "./redux/user";
import songReducer from "./redux/playlist";
import artistReducer from "./redux/artist";
const reducer = combineReducers({
  user: userReducer,
  songs: songReducer,
  artists: artistReducer,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

export default createStore(reducer, middleware);
