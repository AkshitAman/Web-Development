import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(null)

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage:`url(https://imgs.search.brave.com/uN1g4G9gC3Yf0GuOHsUVR4QJ00d9DEdejn_HCL6oj5g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzM0LzU4LzU0/LzM2MF9GXzQzNDU4/NTQ2M196cGR0VHBU/RWJxUUZmc3A2UlZF/VzZJSXhFTTlkSGY4/Ni5qcGc)`}}
    >
      <h1></h1>
    </div>
  )
}

export default App
