import React, { Fragment, useEffect } from 'react';
import { connect } from "react-redux";
import {
  setNumber,
  increment,
  decrement,
  reset
} from "./actions";

const TestApp = ({ dispatch, count }) => {
  const init = () => Number(window.localStorage.count || 0);

  useEffect(() => {
    dispatch(setNumber(init()))
  }, []);

  useEffect(() => {
    window.localStorage.count = count;
  }, [count]);

  return (
    <Fragment>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      <button onClick={() => dispatch(reset())}>x</button>
    </Fragment>
  )
};

const mapStateToProps = (state) => ({
  count: state.count
});

export default connect(
  mapStateToProps,
  null
)(TestApp);