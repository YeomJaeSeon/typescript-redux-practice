import { combineReducers } from "redux";
import countReducer from "./count";
import todoReducer from "./todo";

const rootReducer = combineReducers({
  count: countReducer,
  todos: todoReducer,
});

export default rootReducer;

export type RootReducerType = ReturnType<typeof rootReducer>;
