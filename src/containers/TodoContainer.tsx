import React, { useState } from "react";
import Todo from "../components/Todo";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../modules/index";
import { addTodoAction, deleteTodoAction } from "../modules/todo";

export default function TodoContainer() {
  const [newTodo, setNewTodo] = useState<string>("");
  const dispatch = useDispatch();
  const todos = useSelector((state: RootReducerType) => state.todos);

  const addTodo = (todo: string) => {
    dispatch(addTodoAction(todo));
  };
  const deleteTodo = (id: number) => {
    dispatch(deleteTodoAction(id));
  };
  const inputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  return (
    <Todo
      todos={todos}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      newTodo={newTodo}
      inputTodo={inputTodo}
    ></Todo>
  );
}
