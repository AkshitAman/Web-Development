import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    id:1,
    title:"Akshit",
    description:"Working"
  },{
    id:2,
    title:"Wake up Early Morning",
    description:"Wake Up"
  },{
    id:3,
    title:"Daily Coding",
    description:"Coding"
  }])

  function addTodo(){
    setTodos([...todos,{
      id:4,
      title:Math.random(),
      description:Math.random()
    }])
  }

  return (
    <>
    <button onClick={addTodo}>Add New Todo</button>
      {todos.map(todo => <Todo key={todo.id}title={todo.title} description={todo.description}/>)}
    </>
  )
}

function Todo({title, description}){
  return <div>
    <h3>
      {title}
    </h3>
    <h5>
      {description}
    </h5>
  </div>
}

export default App
