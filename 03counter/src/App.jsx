import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(50)

  // let counter = 50

  const addValue = () => {
    console.log("clicked", counter);
    // counter = counter + 1
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>react</h1>
      <h2>counter value = {counter} </h2>
      <button
        onClick={addValue}
      >Add value</button>
      <br />
      <button>Remove value</button>
    </>
  )
}

export default App
