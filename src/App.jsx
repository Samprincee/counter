import { useState } from 'react'

function App() {

  const [color , setColor] = useState("pink");
  return (

    <div className="w-full h-screen duration-200 p-20  " style={{backgroundColor : color}}>
      <h1 className='text-6xl text-center text-black flex flex-wrap justify-center mt-25 ' >BackGround Color Changer Button </h1>
      <div className='fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2 '> 
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2 '>

        <button onClick={()=> setColor("red")} className='outline-none text-white shadow-lg bg-red-600 rounded-3xl px-4 py-2'>Red</button>
        <button onClick={()=> setColor("green")} className='outline-none text-white shadow-lg bg-green-600 rounded-3xl px-4 py-2'>Green</button>
        <button onClick={()=> setColor("blue")} className='outline-none text-white shadow-lg bg-blue-600 rounded-3xl px-4 py-2'>Blue</button>
        <button onClick={()=> setColor("orange")} className='outline-none text-white shadow-lg bg-orange-600 rounded-3xl px-4 py-2'>Orange</button>
        <button onClick={()=> setColor("violet")} className='outline-none text-white shadow-lg bg-violet-600 rounded-3xl px-4 py-2'>Violet</button>
        <button onClick={()=> setColor("gray")} className='outline-none text-white shadow-lg bg-gray-600 rounded-3xl px-4 py-2'>Gray</button>
        <button onClick={()=> setColor("indigo")} className='outline-none text-white shadow-lg bg-indigo-800 rounded-3xl px-4 py-2'>Indigo</button>
        <button onClick={()=> setColor("yellow")} className='outline-none text-white shadow-lg bg-yellow-600 rounded-3xl px-4 py-2'>Yellow</button>
        
        </div>
      </div>
    </div>
  )
}

export default App
