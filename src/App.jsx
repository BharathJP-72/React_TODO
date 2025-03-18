import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/addTodo/AddTodo'
import store from './store'
import { Provider } from 'react-redux'

function App() {

  // const [todos, setTodos] = useState([ ])

  // function addTodos(todoText) {
  //   let nextId = todos.length + 1
  //   setTodos([...todos, {id:nextId, isFinished: false, text: todoText }])
  // }


  return (
    <>
      <Provider store = {store} >
        <AddTodo  />
        <TodoList />
      </Provider>
    </>
  ) 
}

export default App
