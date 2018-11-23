// Delete request dispatch
export const SUB_DELETE_REQUEST = "SUBREDDIT_DELETE_REQUEST";
// Delete request was successful
export const SUB_DELETE_SUCCESS = "SUBREDDIT_DELETE_SUCCESS";
// Delete request failed
export const SUB_DELETE_FAILED = "SUBREDDIT_DELETE_FAILED";
// Set the favorite attribute of a sub
export const SUB_FAVORITE = "PATCH_FAVORITE_SUB";
// Request sent
export const SUB_REQUESTED = "SUBREDDIT_REQUESTED";
// Request success
export const SUB_RECEIVED = "SUBREDDIT_RECEIVED";
// Request failed
export const SUB_FAILED = "FAILED_TO_GET_SUBREDDIT";
// Change the filter of subs viewed
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
// Possible filters to use
export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_FAVORITE: "SHOW_FAVORITE",
  SHOW_TOP: "SHOW_TOP"
};