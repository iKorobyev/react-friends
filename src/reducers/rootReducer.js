import { combineReducers } from "redux";
import { users, usersHasErrored, usersIsLoading } from "./users";
import { loadButton } from "./loadButton";
import { addToFriends } from "./friends";

const rootReducer = combineReducers({
  users,
  usersHasErrored,
  usersIsLoading,
  loadButton,
  addToFriends
});

export default rootReducer;
