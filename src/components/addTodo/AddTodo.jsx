import React, { useContext, useState } from 'react'
import TodoContext from '../../context/TodoContext'
import { useDispatch } from 'react-redux'

function AddTodo() {
 
    const dispatch = useDispatch()
    const [todoText, setTodoText] = useState('')

    function addTodo(todoText) {
      dispatch({type: 'add_todo', payload: {todoText}})
    }

  return (
    <>
        <input placeholder='Add task...'
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText} />
        <button onClick={() => {
           addTodo(todoText)
           setTodoText('')
        }}> Submit </button>
    </>
  )
}

export default AddTodo