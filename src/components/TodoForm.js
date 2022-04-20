import React, { useState } from 'react'

function TodoForm() {
    const [input, setInput] = useState('')
  return (
    <div>
        <form className="todo-form">
            <input type="text" placeholder='Add a task' value={input}></input>
        </form>
        <button className="button"></button>
    </div>
  )
}

export default TodoForm