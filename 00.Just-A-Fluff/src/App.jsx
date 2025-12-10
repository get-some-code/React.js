import { useCallback, useState } from 'react'
import './index.css'
import Button from './components/Button.jsx'

function App() {
  let [count, setCount] = useState(0)
  let [number, setNumber] = useState(0)

  let increase = useCallback(()=>{
    count += 1;
    setCount(count);
  });

  let decrease = useCallback(()=>{
    count -= 1;
    setCount(count);
  });

  let clear = useCallback(()=>{
    count = 0;
    number = 0;
    setCount(count);
    setNumber(number);
  });

  let setValue = useCallback(()=>{
    count = number;
    setCount(count);
  })

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-black text-white">

      {/* Glass Card */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-10 py-12 shadow-2xl flex flex-col items-center gap-6">

        {/* Title */}
        <h1 className="text-4xl font-extrabold tracking-wide">
          Counter
        </h1>

        {/* Counter Display */}
        <div className="px-6 py-2 rounded-full bg-black/40 text-xl font-semibold border border-white/20 shadow-inner">
          Count: {count}
        </div>

        {/* Buttons */}
        <div className="flex gap-6 mt-2">
          <Button buttonText="+" click={increase} />
          <Button buttonText="-" click={decrease} />
          <Button buttonText="C" click={clear} />
        </div>
        <div className="flex gap-6 mt-2">
          <input 
          type="number" 
          value={number} 
          className='border rounded p-2'
          onChange={(e)=>setNumber(e.target.value)}
          placeholder="Enter" 
          />
          <Button buttonText="Set" click={setValue} />
        </div>

      </div>

    </div>
  )
}

export default App
