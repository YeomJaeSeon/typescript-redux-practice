import React from "react";

type CounterType = {
  count: number;
  increase: () => void;
  decrease: () => void;
  increaseBy: (diff: number) => void;
};

export default function Counter({
  count,
  increase,
  decrease,
  increaseBy,
}: CounterType) {
  return (
    <div>
      {count}
      <button
        onClick={() => {
          increase();
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          decrease();
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          increaseBy(-5);
        }}
      >
        -5
      </button>
    </div>
  );
}
