import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let newArr = [1,2,3,4,5,6,7,8,9]

  return (
    <>
     <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite and tailwindcss</h1>
     <Card username="Akshit" usn="1MV24IC004"  myArr = {newArr}/>
     <Card />
     <Card />
    </>
  )
}

export default App
