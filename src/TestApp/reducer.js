import {
  INCREMENT_NUMBER,
  DECREMENT_NUMBER,
  RESET_NUMBER, SET_NUMBER
} from "./actiontypes";

const countReducer = (state=0, action) => {
  switch(action.type) {
    case SET_NUMBER:
      return action.amt;

    case INCREMENT_NUMBER:
      return state + action.amt;

    case DECREMENT_NUMBER:
      return state - action.amt;

    case RESET_NUMBER:
      return 0;

    default:
      return state;
  }
};

export default countReducer;
