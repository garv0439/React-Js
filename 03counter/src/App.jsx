import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//hook in react
function App() {

  let [counter, setCounter] = useState(5)

  const addValue = () => {
    setCounter(counter + 1)

    if(counter<20){
      setCounter(counter + 1)
    }
    else{
      setCounter(counter - 0)
    }
  }

  const removeValue = () => {
    setCounter(counter - 1)

    if(counter<=0){
      setCounter(counter + 0)
    }
    else{
      setCounter(counter - 1)
    }
  }

 

  return (
    <>
      <h1>react</h1>
      <h2>counter value = {counter} </h2>
      <button
        onClick={addValue}
      >Add value = {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value = {counter}</button>
      <footer>footer: {counter}</footer>
    </>
  )
}

export default App
