import { combineReducers } from "redux";
import { dashBoardReducer } from "./dashBoardReducer";

const rootReducer = combineReducers({
  dashboard: dashBoardReducer,
});

export default rootReducer;
