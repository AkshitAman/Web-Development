import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Layout from "./layout.jsx"
import Home from "./Components/Home/Home.jsx"
import About from "./Components/About/About.jsx"
import Contact_Us from "./Components/Contact Us/Contact_Us.jsx"
import User from "./Components/User/User.jsx"
import Github from './Components/GitHub/Github.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path ='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact_Us />}/>
      <Route path="user/" element={<User />}>
        <Route path=":userid" element={<User />}/>
      </Route>
      <Route path="github" element={<Github />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
