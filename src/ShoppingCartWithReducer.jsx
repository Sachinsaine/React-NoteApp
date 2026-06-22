import { useReducer } from "react";

const initialState = {
  count: 0,
  step: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + state.step,
      };

    case "decrement":
      return {
        ...state,
        count: state.count - state.step,
      };

    case "setStep":
      return {
        ...state,
        step: action.payload,
      };

    case "reset":
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export const ShoppingCartWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Counter with Step</h2>

      <h3>
        Count: {state.count} | Step: {state.step}
      </h3>

      <div>
        <label>Step Value: </label>
        <input
          type="number"
          value={state.step}
          onChange={(e) =>
            dispatch({
              type: "setStep",
              payload: Number(e.target.value),
            })
          }
        />
      </div>

      <br />

      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>

      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};
