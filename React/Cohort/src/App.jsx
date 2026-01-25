import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'

function App() {
  const[title, setTitle] = useState("My name is Akshit")

  function updateTitle() {
    setTitle("My name is " + Math.random())
  }

  return (
    <div>
      <button onClick={updateTitle}>click to change the name</button>
      <Header title={title}/>
     <Header title="Aman"/>
     <Header title="Aman"/>
     <Header title="Aman"/>
     <Header title="Aman"/>
    </div>
  )
}
                          // First way to skip re-rendering all the components

// function HeaderwithButton(){
//   const[title, setTitle] = useState("My name is Akshit")

//   function updateName(){
//     setTitle("My name is " + Math.random())
//   }

//   return <>
//     <button onClick={updateName}>click me to change Name</button>
//     <Header title={title}/>
//   </>
// }

// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }

            // Second Way to Skip re-rendering all the Component By Using React.memo

const Header = React.memo(function Header({title}){
  return <div> 
    {title}
  </div>

})


export default App
