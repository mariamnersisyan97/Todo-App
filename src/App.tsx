import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export const App = () => {
  return (
    <>
      <div className="ui container" style={{ marginTop: "10px" }}>
        <TodoForm />
      </div>
    </>
  );
};
