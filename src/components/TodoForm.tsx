import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function TodoForm({ addTodo }: { addTodo: any }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });
  function handleTaskInputChange(e: { target: { value: any } }) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      //resetting task input
      setTodo({ ...todo, task: "" });
    }
  }
  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <label> Todo List</label>
          <input name="task" type="text" onChange={handleTaskInputChange} />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
// handleSubmit fires when the form is submitted

export default TodoForm;
