import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from "./Contexts/index"

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter(prevTodo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) => 
        prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
  ))
  }

  return (
    <TodoProvider value={{todos, addTodo ,updateTodo, deleteTodo, toggleTodo}}>
      <h1 className='text-white bg-gray-700'>Testing</h1>
    </TodoProvider>
  )
}

export default App
