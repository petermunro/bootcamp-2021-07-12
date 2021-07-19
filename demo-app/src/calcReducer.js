import { ADD_ACTION, SUBTRACT_ACTION } from './calcActions';

// let exampleAction = {
//     type: ADD_ACTION,
//     value: 23,
// }

let initialState = {
  result: 0,
};

export function calcReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ACTION:
      return {
        ...state,
        result: state.result + action.value,
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        result: state.result - action.value,
      };
    default:
      return state;
  }
}
