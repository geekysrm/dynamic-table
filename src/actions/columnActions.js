import { ADD_COLUMNS } from "./types";

export const addColumns = columnsData => dispatch => {
  console.log("in action");
  console.log(columnsData);

  dispatch({
    type: ADD_COLUMNS,
    payload: columnsData
  });
};
