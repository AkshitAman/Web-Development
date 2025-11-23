import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  Children: "Click me to visit google",
};

function MyApp(){
    return (
        <div>
            <h1>Custom React App</h1>
        </div>
    )
}

const AnotherElement = (
    <a href="http://google.com" target='_blank'>Visit Google</a>
)

const areactElement = React.createElement(
    'a',
    {href: 'http://google.com', target:'_blank'},  // Second one is always an object
    'Click to visit Google'
)

createRoot(document.getElementById('root')).render(    // React.render only accept one Argument

    // MyApp() it will create render issue instead of that we will do 
    // <MyApp /> 
    // AnotherElement
    // areactElement
    <App/>
)
