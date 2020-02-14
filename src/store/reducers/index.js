import {combineReducers} from "redux";
import chats from "./chats";
import people from "./people";

export default combineReducers({
  chats,
  people,
});
