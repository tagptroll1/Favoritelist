import {
  INCREMENT_NUMBER,
  DECREMENT_NUMBER,
  RESET_NUMBER,
  SET_NUMBER
} from "./actiontypes";

export function setNumber(amt) {
  return {
    type: SET_NUMBER,
    amt
  }
}

export function increment(amt) {
  return {
    type: INCREMENT_NUMBER,
    amt
  };
}

export function decrement(amt) {
  return {
    type: DECREMENT_NUMBER,
    amt
  };
}

export function reset() {
  return {
    type: RESET_NUMBER
  };
}
