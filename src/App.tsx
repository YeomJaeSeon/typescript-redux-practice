import React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodoContainer from "./containers/TodoContainer";

export default function App() {
  return (
    <div>
      <CounterContainer></CounterContainer>
      <TodoContainer></TodoContainer>
    </div>
  );
}
