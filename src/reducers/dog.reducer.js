import { actions } from "../actions/dog.actions";

// Initial State
const INITIAL_STATE = {
  dogData: {},
};

// User Reducer.
export default (state = INITIAL_STATE, { type, data }) => {
  switch (type) {
    case actions.SET_DOG_DATA:
      return { ...state, dogData: data };
    default:
      return state;
  }
};
