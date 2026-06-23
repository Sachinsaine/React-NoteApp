import { useReducer } from "react";

export const ShoppingCartWithReducer = () => {
  let initialValue = {
    count: 0,
    step: 1,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + state.step };
      case "decrement":
        return { ...state, count: state.count - state.step };
      case "setstep":
        return { ...state, step: action.payload };
      case "reset":
        return { ...initialValue };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>useReducer </h1>
      <h2>
        Count: {state.count} | Steps: {state.step}{" "}
      </h2>
      <div>
        Setstep:{" "}
        <input
          type="number"
          value={state.step}
          onChange={(e) =>
            dispatch({ type: "setstep", payload: Number(e.target.value) })
          }
        />
      </div>
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
};
