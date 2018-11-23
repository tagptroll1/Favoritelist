import subs, { visibilityFilter } from "./RedditApp/reducer";
import countReducer from "./TestApp/reducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Combine all reducers to one rootReducer
const rootReducer = combineReducers({
  subs,
  visibilityFilter,
  count: countReducer,
});

// Container for all enhancers (functions) from window.devToolsExtension
const enhancers = [];

// If we're on node / dev environment load in all extensions
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

// Add thunk and all development middleware to a containers middleware
const composedEnhancers = compose(
  applyMiddleware(thunk),
  ...enhancers
);

// Create redux store with the rootReducer, a default state for subs, and all the middleware
const store = createStore(rootReducer, {subs: []}, composedEnhancers);

export default store;