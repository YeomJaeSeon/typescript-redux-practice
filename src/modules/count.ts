// Actions
const INCREASE = "count/INCREASE" as const;
const DECREASE = "count/DECREASE" as const;
const INCREASEBY = "count/INCREASEBY" as const;

// Action creators
export const increaseAction = () => {
  return {
    type: INCREASE,
  };
};

export const decreaseAction = () => {
  return {
    type: DECREASE,
  };
};

export const increaseByAction = (diff: number) => {
  return {
    type: INCREASEBY,
    payload: diff,
  };
};

type ActionType =
  | ReturnType<typeof increaseAction>
  | ReturnType<typeof decreaseAction>
  | ReturnType<typeof increaseByAction>;

const initialState = {
  count: 0,
};

type StateAction = {
  count: number;
};

const countReducer = (
  state: StateAction = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASEBY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

export default countReducer;
