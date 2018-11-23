import React from 'react';
import PropTypes from "prop-types";

/**
 * A single post from a subreddit
 * @param post The object containing data about this particular post
 * @returns {*} A click-able set of title/author/score/thumbnail
 */
function RedditPost({ post }) {
    return (
          <a href={post.url}>
            <span className="postScore" >{post.score}</span>
            <img className="postThumb" src={post.thumbnail} alt={post.title} />
            <h3 className="postTitle" >{post.title}</h3>
            <span className="postAuthor">Author: {post.author}</span>
          </a>
    )
}

/**
 * Restrictions for RedditPost;
 *    Most receive an object with the attributes:
 *    (id, url, directs_to, score, subName, thumbnail, title and author)
 */
RedditPost.propTypes = {
    post: PropTypes.shape({
      author: PropTypes.string,
      directs_to: PropTypes.string,
      id: PropTypes.string,
      score: PropTypes.number,
      subName: PropTypes.string,
      thumbnail: PropTypes.string,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
};

export default RedditPost;