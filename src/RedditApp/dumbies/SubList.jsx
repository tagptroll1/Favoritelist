import React, {Fragment} from "react";
import RedditPost from "../dumbies/RedditPost";
import PropTypes from 'prop-types';

// Style for the list, remove the list dots
const redditListStyle = {
  listStyle: "none",
};

// Style for each element in the list
const redditPostStyle = {
  backgroundColor: "rgb(80, 80, 80)",
  maxWidth: 1200,
  padding: 20,
  margin: "0 auto",
  width: "80%",
};

/**
 * The list containing all the posts for a subreddit
 * TODO: Extract this to subReddit.jsx?
 * @param posts An array of posts
 * @returns {*} An unordered list of RedditPosts
 */
function SubList({ posts }) {
  return (
      <ul style={redditListStyle}>
      {posts.map(post => {
        return (
            <li style={redditPostStyle} key={post.id}>
              <RedditPost post={post}/>
            </li>
          )
      })}
    </ul>
  );
}

/**
 * Restriction, must get an array, can be empty.
 */
SubList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default SubList;
