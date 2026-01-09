import { useState, useCallback, useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(7)
  const [isnumb, setnumber]= useState(false)
  const [ischar, setchar]= useState(false)
  const [password, setpassword]= useState('')

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(isnumb){
      str += "0123456789"
    }
    if(ischar){
      str += "!@#$%^&*()_+"
    }

    for(let i=1; i<=length; i++){
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  }, [length, isnumb, ischar])

  const CopyToClickBoard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select();
  }

  useEffect(()=> {
    generatePassword()
  },[length, isnumb, ischar])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3  my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>
        Password Generator
      </h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={password}
        className='outline-none w-full py-1 px-3 bg-white text-black'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={CopyToClickBoard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          Copy
        </button>
      </div>
      <div className='flex items-center gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          className='cursor-pointer' 
          type="range"
          min={5}
          max={15}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          name="" 
          id="" 
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={isnumb}
          onChange={() => setnumber((prev) => !prev)} 
          name="" 
          id="" />
          <label htmlFor="isnumb">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={ischar}
          onChange={() => setchar((prev) => !prev)}
          name="" 
          id="" />
          <label htmlFor="ischar">Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
