import { useState } from "react";

export const Todo = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const handleAdd = () => {
    setTask([
      ...task,
      {
        id: Date.now(),
        text: input,
        complete: false,
      },
    ]);
    setInput("");
  };
  const handleComplte = (i) => {
    setTask(
      task.map((todo) =>
        todo.id === i ? { ...todo, complete: !todo.complete } : todo,
      ),
    );
  };
  const handleRemove = (id) => {
    setTask(task.filter((todo) => todo.id !== id));
  };
  const total = task.length;
  const completd = task.filter((todo) => todo.complete).length;
  return (
    <div>
      <h1>ToDo list</h1>
      <div>Total : {total}</div>
      <div>Completed: {completd} </div>
      <div>
        <input
          type="text"
          value={input}
          placeholder="enter your task..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        {task.map((todo, index) => {
          return (
            <div key={index}>
              <p
                onClick={() => handleComplte(todo.id)}
                style={{
                  textDecoration: todo.complete ? "line-through" : "",
                  cursor: "pointer",
                }}
              >
                {todo.text}
              </p>
              <button onClick={() => handleRemove(todo.id)}>Remove</button>
            </div>
          );
        })}
      </div>
      <div>{task.length === 0 ? "There is no todos" : ""}</div>
    </div>
  );
};
