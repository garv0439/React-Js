import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)

  // let myobj= {
  //   username: "garv",
  //   age: 20
  // }

  // let newarr= [1,2,2,4]

  return (
    <>
      <h1 className='bg-green-600 text-black p-5 rounded-xl mb-4'>tailwind test</h1>
      <Card name="Riya" /*someobj={myobj} arr={newarr}*/ btntext='click me' />
        <Card name="Diya"  btntext='open it'/>
    </>
  )
}

export default App
