import { useReducer } from "react";

export const ToggleWithReducer = () => {
  let initialValue = {
    darkMode: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "theme":
        return { ...state, darkMode: !state.darkMode };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div style={{ backgroundColor: state.darkMode ? "black" : "white" }}>
      <h1 style={{ color: state.darkMode ? "white" : "black" }}>
        Toggle with useReducer
      </h1>
      <button onClick={() => dispatch({ type: "theme" })}>
        {state.darkMode ? "Light mode" : "Dark mode"}
      </button>
    </div>
  );
};
