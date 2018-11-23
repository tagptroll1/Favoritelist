import {
  SUB_REQUESTED,
  SUB_RECEIVED,
  SUB_FAILED,
  // TODO: Add these V
  //DELETE_SUBREDDIT,
  //PATCH_FAVORITE_REDDIT,
  VisibilityFilters,
  SET_VISIBILITY_FILTER
} from "./actionTypes";

const defaultObj = {
  loaded: false,
  loading: false,
  error: null,
  favorite: false
};

/**
 * Main reducer for the subreddits, possible actions:
 *    SUB_REQUESTED: Changes state of loading to true, and initializes the base object for a subreddit
 *    SUB_RECEIVED: Subreddit was received successfully, sets loading to false, and loaded to true, and adds response
 *    SUB_FAILED: The request failed, loading is set to false, and the error is passed as error
 *    TODO:
 *    SUB_DELETED: Will delete a sub from the main state array
 *    SUB_FAVORITE: Patches the favorite attribute of a sub
 * @param state Main reddit state to be 'reduced'
 * @param action contains type and payload, payload have a few possible attributes like subName, sub and error
 * @returns {*} new state
 */
const redditReducer = (state = [], action) => {
  switch (action.type) {
    case SUB_REQUESTED: {
      const name = action.payload.subName;

      return [
        ...state,
        { ...defaultObj, id: action.id, name: name, posts: [], loading: true }
      ];
    }

    case SUB_RECEIVED: {
      const sub = action.payload.sub;
      // Remove the state part from SUB_REQUESTED
      const filtered_state = state.filter(sub => sub.id !== action.id);

      return [
        ...filtered_state,
        {
          ...defaultObj,
          id: action.id,
          name: action.payload.name,
          posts: sub,
          loaded: true
        }
      ];
    }

    case SUB_FAILED: {
      const error = action.payload.error;
      const filtered_state = state.filter(sub => sub.id !== action.id);

      return [...filtered_state, { ...defaultObj, id:action.id, error }];
    }
    /* TODO: implement
    case DELETE_SUBREDDIT: {
      const subName = action.payload.subName;
      return state.filter(sub => !sub[subName]);
    }

    case PATCH_FAVORITE_REDDIT: {
      const subName = action.payload.subName;
      const subToAlter = state.find(sub => sub[subName]);
      const favorite = action.payload.favorite || !subToAlter.favorite;

      return [
        ...state,
        {
          ...defaultObj,
          [subName]: {
            ...subToAlter,
            favorite
          },
          loaded: true,
        }
      ];
    }*/
    default:
      return state;
  }
};

/**
 * Reducer to set the filter state
 * @param state Defaults to SHOW_ALL subs
 * @param action contains filter as payload
 * @returns {*}
 */
export const visibilityFilter = (
  state = VisibilityFilters.SHOW_ALL,
  action
) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
};

/**
 * Reducer not yet in the store TODO: ?
 * Used to filter out subs based on filter
 * @param subs Array of subreddits to be filtered
 * @param filter The filter to apply
 * @returns {*} a new array of subreddits based on filter
 */
export const getVisibleSubs = (subs = [], filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_FAVORITE:
      return subs.filter(sub => sub.favorite);

    case VisibilityFilters.SHOW_TOP:
      return subs.slice(0, 5);

    case VisibilityFilters.SHOW_ALL:
      return subs;
    default:
      return [];
  }
};

export default redditReducer;
