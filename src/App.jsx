import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Father></Father>
    
    </>
  )
}

function Me(){
  const name = 'Rony';
  const age = 23;
  return (
  <h1>I am {name} and I am {age} years old</h1>)
}

function Father(){
  const info = {name: 'Esa Miah', Age: 57, address: 'Andiura, Madhabpur, Habiganj, Sylhet', contact: "01775970526", color: 'brown'}
  return (
    <div className="">
      <h1>My father's name is {info.name}. He is {info.Age} years old. He lives in {info.address}. His contact number is {info.contact}</h1>
    </div>
  )
}

function Mother(){
  return (
    h1
  )
}



export default App
