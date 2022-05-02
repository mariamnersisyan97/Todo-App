import React from "react";
//checkbox, task, delete btn

function Todo({ todo }: { todo: any }, checkboxClick) {
  function checkBox() {
    checkboxClick(todo.id);
  }
  return (
    <>
      <></>
      <div style={{ textAlign: "center" }}>
        <input type="checkbox" onClick={checkboxClick} />
        <li
          style={{
            color: "red",
            textDecoration: todo.completed ? "line-through" : undefined,
          }}
        >
          {todo.task}
        </li>
        <button>X</button>
      </div>
    </>
  );
}

export default Todo;
