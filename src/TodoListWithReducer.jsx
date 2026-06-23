import { useReducer } from "react";

let initialValue = {
  task: "",
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "input":
      return { ...state, task: action.payload };
    case "addtask":
      return {
        ...state,
        todos: [...state.todos, state.task],
        task: "",
      };
    default:
      return state;
  }
};

export const TodoListWithReducer = () => {
  const [todo, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>ToDo list with useReducer</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your task"
          onChange={(e) => dispatch({ type: "input", payload: e.target.value })}
        />
        <button onClick={() => dispatch({ type: "addtask" })}>Add</button>
      </div>
      <div>
        {todo.todos.map((todo, index) => {
          return (
            <div key={index}>
              <div>{todo}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
