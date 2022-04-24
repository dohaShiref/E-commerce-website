import todosReducer from "./postsReducer";

import { combineReducers } from "redux";

export default combineReducers({
  todosList: todosReducer,
});
