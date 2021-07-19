export const ADD_ACTION = 'ADD_ACTION';
export const SUBTRACT_ACTION = 'SUBTRACT_ACTION';

export function createAddAction(value) {
  return {
    type: ADD_ACTION,
    value,
  };
}

export function createSubtractAction(value) {
  return {
    type: SUBTRACT_ACTION,
    value,
  };
}
