import React, { useState } from "react";

const TodoList = () => {
  const [todo, addTodo] = useState([]);
  //empty array of todos
  // make an input
  // render input on ul/li
  // make a func that takes the value + adds it to a list
  // react to loop over the list to display them all(.map())

  return (
    <>
      <p style={{ textAlign: "center" }}>Task #1 </p>
    </>
  );
};
export default TodoList;
