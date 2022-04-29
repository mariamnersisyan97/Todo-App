import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
// import Todo from "./components/Todo";

export const App = () => {
  const [todos, setTodos] = useState<string[]>([]);

  function addTodo(todo: any) {
    setTodos([todo, ...todos]);
  }
  return (
    <>
      <div className="App" style={{ marginTop: "10px" }}>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
    </>
  );
};
export default App;
