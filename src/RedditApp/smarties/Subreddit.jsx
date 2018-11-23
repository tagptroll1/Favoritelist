import React from 'react';
import SubList from "../dumbies/SubList";
import PropTypes from 'prop-types';

/**
 * Component representing the list of posts in a Subreddit Component
 * TODO: Redundant component?
 * @param posts the posts to be displayed
 * @returns {*} a SubList containing all posts
 */
function Subreddit({ posts }) {
  return <SubList posts={posts} />
}

/**
 * Restrictions for Subreddit;
 * Must get an array as props, can be empty
 */
Subreddit.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Subreddit;
