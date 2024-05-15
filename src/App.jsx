import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Me></Me>
    <h1>Hi hereI am Rony</h1>
    </>
  )
}

function Me(){
  return (
  <h1>I am rony</h1>)
}


export default App
