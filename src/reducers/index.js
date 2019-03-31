// Root Reducer
import { combineReducers } from "redux";
import columnReducer from "./columnReducer";
import rowReducer from "./rowReducer";

export default combineReducers({
  columns: columnReducer,
  rows: rowReducer
});
