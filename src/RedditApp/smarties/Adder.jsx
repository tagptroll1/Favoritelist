import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

/**
 * Adder component, a simple form that stores the text passed
 * and dispatches it through addSub when the form is submitted
 * @param subs list of subs to check if a request is needed
 * @param addSub dispatch function to dispatch a addSub action
 * @returns {*} A component consisting of a form a text field and button
 * @constructor sets up state and handlers
 */
function Adder({ subs, addSub }) {
  const [value, setValue] = useState("r/funny");

  /**
   * Handles the change event of the text field;
   * Sets the local state to the events value.
   * @param event the event sent when it changes
   */
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  /**
   * Handles the submit event when the form submits;
   * passes value to the dispatch function from props (addSub)
   * @param event implicitly passed from the forms submit
   */
  const handleSubmit = (event) => {
    console.log(value);
    console.log(subs);
    if (!subs.find(sub => sub.name === value)){
      addSub(value);
    }
    setValue("");
    event.preventDefault();
  };

  /**
   * Handles the click event of the text box;
   * Resets the value to an empty string so you can clear
   * the text box by clicking it.
   */
  const handleClick = () => {
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onClick={handleClick}
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

/**
 * Restrictions for the component, can only take the dispatch function
 */
Adder.propTypes = {
  addSub: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  subs: state.subs
});

export default connect(
  mapStateToProps,
  null
)(Adder);
