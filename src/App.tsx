// import TodoList from './TodoForm';
import React, { useState } from 'react';


export const App = () => {
  // const [todos, setTodos] = useState('')
  return(
    
    <div>
    <header style={{ textAlign: 'center'}}>
     <h1> To Do List</h1>
     </header>
        <div>
        <div className="ui input"><input type="text" placeholder="Search..."/></div>
        </div>
     <button style={{ textAlign: 'center'}}> Add Task </button>
     
     </div>
  )

};
