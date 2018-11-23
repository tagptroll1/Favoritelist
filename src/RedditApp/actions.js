import Reddit from "../services/reddit";
import {
    SUB_REQUESTED,
    SUB_RECEIVED,
    SUB_FAILED,
    SUB_DELETED,
} from "./actionTypes";


/**
 * action to tell the site a request for a new subreddit has been dispatched, and is pending
 * @param subName The sub name to be fetched "r/funny" or "funny" both supported
 * @returns {{id: number, type: string, payload: {subName: *}}} the action to dispatch
 */
function subRequested(subName) {
  return {
    id: subName,
    type: SUB_REQUESTED,
    payload: { subName }
  };
}

/**
 * Action to tell the site a request finished pending, and was received successfully.
 * @param sub The full sub received
 * @param subName The same of the subreddit received
 * @returns {{id: number, type: string, payload: {sub: *, name: *}}}
 */
function subReceived(sub, subName) {
  return {
    id: subName,
    type: SUB_RECEIVED,
    payload: { sub, name:subName }
  };
}

/**
 * The action dispatched if the request fails after subRequested is dispached
 * @param error The error the server returned
 * @returns {{type: string, payload: {error: *}}}
 */
function subFailed(error) {
  return {
    type: SUB_FAILED,
    payload: { error }
  };
}

/**
 * Wrapper function to call multiple dispatched
 *    - Dispatch the subRequested
 *    - Dispatch subReceived or subFailed depending on status
 * @param dispatch The dispatch function
 * @param subName The subname to be fetched
 */
export function addSub(dispatch, subName) {
  dispatch(subRequested(subName));
  Reddit.getSub(subName)
    .then(response => dispatch(subReceived(response, subName)))
    .catch(err => dispatch(subFailed(err)));

}

function subDelRequest(subName){

}

function subDelSuccess(response, subName){

}

function subDelFailed(error){

}

export function delSub(dispatch, subName) {
  dispatch(subDelRequest(subName));
  Reddit.delSub(subName)
      .then(response => dispatch(subDelSuccess(response, subName)))
      .catch(error => dispatch(subDelFailed(error)));
}

/*
export function setFav(sub) {
  return {
    type: PATCH_FAVORITE_REDDIT,
    payload: { sub }
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}
*/
