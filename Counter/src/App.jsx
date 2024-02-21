import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter, setCounter] = useState(15)

const addCounter = () => {
  if(counter < 20){
    counter = counter + 1
    setCounter(counter)
  }
  
}

const removeCounter = () => {
  if(counter > 0){
    counter = counter - 1
    setCounter(counter)
  }
  
}

  return (
    <>
      <h2>Counter : {counter} </h2>
      <button onClick={addCounter}>Add value: {counter} </button> <br /> <br />  
      <button onClick={removeCounter} >Remove value : {counter} </button>
    </>
  )
}

export default App
