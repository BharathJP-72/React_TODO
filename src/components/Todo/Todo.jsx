import './Todo.css'

import React, { useState } from 'react'

function Todo({text, isFinished, deleteTodo, editTodo, finishTodo}) {

  const [isEditing, setIsEditing] = useState(false)
  const [todoText, setTodoText] = useState(text)

  return (
    <div className='Todo'>
        <input className='Checkbox' type="checkbox" checked={isFinished} onChange={() => finishTodo(!isFinished)}/>
        
        <div className='Text-container'>
            {isEditing ? <input  value={todoText} onChange={(e) => setTodoText(e.target.value)}/> : <span> {todoText} </span> }
        </div>

        <div className='Btn-container'>
          <button className='Edit-btn' onClick={() => {
            setIsEditing(!isEditing)
            editTodo(todoText)
          }}> 
            {isEditing ? "Save" : "Edit"} 
          </button>
          <button className='Delete-btn' onClick={deleteTodo}> Delete </button>
        </div>
    </div>
)
}

export default Todo