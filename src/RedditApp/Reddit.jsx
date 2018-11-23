import Adder from "./smarties/Adder";
import Subreddit from "./smarties/Subreddit";
import React from "react";
import { connect } from "react-redux";
import { addSub } from "./actions";
import "./redditStyle.css";

/**
 * Reddit Component
 *    Features:
 *      - add sub reddit
 *      TODO:
 *      - remove sub reddit
 *      - favorite toggle
 *      - filter display on top 5 and favorite.
 *      - Collapse the list of posts from the sub
 * @param subs Array of objects representing subreddits
 *          (from: mapStateToProps)
 * @param addSub dispatch for adding a subreddit by name
 *          (from: mapDispatchToProps)
 * @returns {*} Returns a title, form for adding a sub, and the list of subreddits
 * @constructor Filters out states that are not loaded TODO: fix state here.
 */
function Reddit({ subs, addSub }) {
  const loadedSubs = subs.filter(sub => sub.loaded);

  return (
    <section>
      <h1>Reddit Favorites</h1>
      <Adder addSub={addSub} />
      {loadedSubs.map(sub => (
        <Subreddit key={sub.name} posts={sub.posts} />
      ))}
    </section>
  );
}

/**
 * Maps the redux state to a smaller state only containing sub reddits
 * @param state Full redux state
 * @returns {{subs: Array}} List of sub reddits
 */
const mapStateToProps = state => ({
  subs: state.subs || [],
});

/**
 * Maps the dispatch function to a prop that can be used from props
 * @param dispatch - The function to dispatch an action
 * @returns {{addSub: (function(*=): void)}} an action that takes dispatch
 */
const mapDispatchToProps = dispatch => ({
  addSub: name => addSub(dispatch, name)
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reddit);
