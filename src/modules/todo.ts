// Actions -  const assertion잊지말기
// ACtions 타입이름 파일명/타입이름
const ADD_TODO = "todo/ADD_TODO" as const;
const DELETE_TODO = "todo/DELETE_TODO" as const;

// Action Creators
// export로 내보내
let nextId = 0;
export const addTodoAction = (todo: string) => {
  return {
    type: ADD_TODO,
    payload: { id: ++nextId, todo: todo },
  };
};

export const deleteTodoAction = (id: number) => {
  return {
    type: DELETE_TODO,
    payload: { id: id },
  };
};

type TodoActionType =
  | ReturnType<typeof addTodoAction>
  | ReturnType<typeof deleteTodoAction>;

type TodoStateType = {
  id: number;
  todo: string;
}[];

const initialState: TodoStateType = [];

const todoReducer = (
  state: TodoStateType = initialState,
  action: TodoActionType
) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.payload.id, todo: action.payload.todo }];
    case DELETE_TODO:
      return state.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
};

// export default로 해당 리듀서 내보내
export default todoReducer;

// action, action creators, reducer 하나의 파일에있어!

// ducks pattern
