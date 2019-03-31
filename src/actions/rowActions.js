import { ADD_ROWS } from "./types";

export const addRows = rowsData => dispatch => {
  console.log("in action");
  console.log(rowsData);

  dispatch({
    type: ADD_ROWS,
    payload: rowsData
  });
};
