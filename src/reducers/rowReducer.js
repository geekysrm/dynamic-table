import { ADD_ROWS } from "../actions/types";

const initialState = {
  rowsData: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ROWS:
      return {
        ...state,
        rowsData: action.payload
        // rowsData: [...state.rowsData, action.payload]
      };
    default:
      return state;
  }
}
