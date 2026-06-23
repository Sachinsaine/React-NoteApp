import { useReducer } from "react";

let initialValue = {
  input: "",
  tasks: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "inputText":
      return { ...state, input: action.payload };
    case "add":
      return { ...state, tasks: [...state.tasks, state.input], input: " " };
    case "remove":
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => index !== action.payload),
      };
    default:
      return state;
  }
};
export const TodoListWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>ToDo list with useReducer</h1>
      <div>
        <input
          type="text"
          placeholder="enter your task..."
          value={state.input}
          onChange={(e) =>
            dispatch({ type: "inputText", payload: e.target.value })
          }
        />
        <button
          disabled={!state.input.trim()}
          onClick={() => dispatch({ type: "add" })}
        >
          Add
        </button>
      </div>
      <div>
        {state.tasks.map((todo, index) => {
          return (
            <div key={index}>
              <span>{todo}</span>
              <button
                onClick={() => dispatch({ type: "remove", payload: index })}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
