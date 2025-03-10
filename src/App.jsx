
import { useReducer, useState } from 'react'
import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/addTodo/AddTodo'
import TodoContext from './context/TodoContext'
import TodoReducer from './reducers/TodoReducer'

function App() {

  // const [todos, setTodos] = useState([ ])

  // function addTodos(todoText) {
  //   let nextId = todos.length + 1
  //   setTodos([...todos, {id:nextId, isFinished: false, text: todoText }])
  // }

  const [todos, dispatch] = useReducer(TodoReducer, [])

  return (
    <>
     <TodoContext.Provider value={{todos, dispatch}}>
      <AddTodo  />
      <TodoList />
     </TodoContext.Provider>
    </>
  ) 
}

export default App
