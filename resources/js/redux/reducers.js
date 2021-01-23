import { combineReducers } from "redux";
import listReducer from "./list/reducer";









const appReducer = combineReducers({

  listReducer
});

const rootReducer = (state, action) => {
  if (action.type === "GET_UNDEFINED_REQUEST_SUCCESS") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
