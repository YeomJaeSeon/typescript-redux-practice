import React from "react";

type TodoProps = {
  todos: { id: number; todo: string }[];
  addTodo: (todo: string) => void;
  deleteTodo: (id: number) => void;
  newTodo: string;
  inputTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Todo({
  todos,
  addTodo,
  deleteTodo,
  newTodo,
  inputTodo,
}: TodoProps) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          inputTodo(e);
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            addTodo(newTodo);
          }
        }}
      />
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </div>
        );
      })}
    </div>
  );
}
