import { ADD_COLUMNS } from "../actions/types";

const initialState = {
  columnsData: []
};

export default function(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case ADD_COLUMNS:
      return {
        ...state,
        columnsData: action.payload
        // columnsData: [...state.columnsData, action.payload]
      };
    default:
      return state;
  }
}
