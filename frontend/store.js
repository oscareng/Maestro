import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import userReducer from "./redux/user";
import playlistReducer from "./redux/playlist";
import genresReducer from "./redux/genres";
import moodReducer from "./redux/mood";

const reducer = combineReducers({
  user: userReducer,
  playlist: playlistReducer,
  genres: genresReducer,
  mood: moodReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

export default createStore(reducer, middleware);
