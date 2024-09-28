import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  const [res, setRes] = useState("")

  // let counter = 15;

  return (
    <>
      <h1 className='m-2'>Prince working {counter}</h1>
      <h2 className='m-10' >Counter = {counter}</h2>

      <button
        onClick={() => { 
          if(counter < 20){
            setCounter(counter + 1)
          }else{
            setRes("Bas kar Bhai 20 Hoagye")
          }
         }}>Add Value {counter} </button >

    <button onClick={() => {
      if(counter > 0){
        setCounter(counter - 1)
        removeEventListener.res
      }else{
        setRes("maar gya bhai bas")
      }
    }}>Reduce Value {counter} </button>

    <h1 className='m-5'>{res}</h1>
    </>
  )
}

export default App
