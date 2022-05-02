import React from "react";
import Todo from "./Todo";

function TodoList({ todos }: { todos: any }) {
  return (
    <>
      <div>
        <p style={{ textAlign: "center" }}>Task List </p>
        <ul>
          {todos.map((todo: { id: React.Key | null | undefined }) => (
            <Todo key={todo.id} todo={todo} />
            //map over todos and return todo component with obj passed as a prop
          ))}
        </ul>
      </div>
    </>
  );
}
export default TodoList;
