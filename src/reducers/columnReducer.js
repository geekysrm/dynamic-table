import { ADD_COLUMNS } from "../actions/types";

const initialState = {
  columnsData: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_COLUMNS:
      return { 
        ...state,
        columnsData: [...state.columnsData, action.payload]
    	};
    default:
      return state;
  }
}