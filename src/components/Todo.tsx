import React from "react";
//checkbox, task, delete btn

function Todo({ todo }: { todo: any }) {
  return (
    <>
      <></>
      <input type="checkbox" />
      <li
        style={{
          color: "red",
          textDecoration: todo.completed ? "line-through" : undefined,
        }}
      >
        {todo.task}
      </li>
      <button>X</button>
    </>
  );
}

export default Todo;
