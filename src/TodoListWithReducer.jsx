import { useReducer } from "react";

const initialValue = {
  input: "",
  tasks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "inputText":
      return {
        ...state,
        input: action.payload,
      };

    case "add":
      if (!state.input.trim()) {
        return state;
      }

      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            text: state.input,
            completed: false,
          },
        ],
        input: "",
      };

    case "remove":
      return {
        ...state,
        tasks: state.tasks.filter((todo, index) => index !== action.payload),
      };

    case "complete":
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload
            ? {
                ...task,
                completed: !task.completed,
              }
            : task,
        ),
      };

    default:
      return state;
  }
};

export const TodoListWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h1>Todo List with useReducer</h1>

      <input
        type="text"
        placeholder="Enter your task..."
        value={state.input}
        onChange={(e) =>
          dispatch({
            type: "inputText",
            payload: e.target.value,
          })
        }
      />

      <button
        disabled={!state.input.trim()}
        onClick={() => dispatch({ type: "add" })}
      >
        Add
      </button>

      <hr />

      {state.tasks.length === 0 ? (
        <p>No tasks added yet!</p>
      ) : (
        state.tasks.map((task, index) => (
          <div key={index}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>

            <button
              onClick={() =>
                dispatch({
                  type: "complete",
                  payload: index,
                })
              }
            >
              {task.completed ? "Undo" : "Complete"}
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "remove",
                  payload: index,
                })
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};
