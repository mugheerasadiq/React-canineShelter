import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// Root Reducer.
export default (history) =>
  combineReducers({
    router: connectRouter(history),
  });
