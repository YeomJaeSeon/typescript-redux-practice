import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../modules/index";
import {
  increaseAction,
  decreaseAction,
  increaseByAction,
} from "../modules/count";
import Counter from "../components/Counter";

export default function CounterContainer() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootReducerType) => state.count.count);

  const increase = () => {
    dispatch(increaseAction());
  };
  const decrease = () => {
    dispatch(decreaseAction());
  };
  const increaseBy = (diff: number) => {
    dispatch(increaseByAction(diff));
  };

  return (
    <Counter
      count={count}
      increase={increase}
      decrease={decrease}
      increaseBy={increaseBy}
    ></Counter>
  );
}
