import { useReducer } from "react";
let initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialValue;

    default:
      return state;
  }
};
export const CounterWithReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};
