import React, { useState } from "react";

const TodoForm = () => {
  const [input, setInput] = useState("");
  return (
    <>
      {
        <div>
          <header style={{ textAlign: "center" }}>
            <h1> To Do List</h1>
          </header>
          <div style={{ textAlign: "center" }}>
            <div className="task-input">
              <input
                type="text"
                placeholder="Task..."
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
          </div>
          <p>First Task</p>
          <div className="add-task-buton" style={{ textAlign: "center" }}>
            <button type="button"> Add Task </button>
          </div>
        </div>
      }
    </>
  );
};

export default TodoForm;
//You add the input value to your array of todos when you click the button
