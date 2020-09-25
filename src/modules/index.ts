import { combineReducers } from "redux";
import countReducer from "./count";

const rootReducer = combineReducers({ countReducer });

export default rootReducer;

export type RootReducerType = ReturnType<typeof rootReducer>;
