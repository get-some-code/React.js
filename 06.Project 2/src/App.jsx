import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "@#$%&*()+-_{}[]$₹?/:;"

    for (let i = 0; index <= str.length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(index);
    }

    setPassword(pass);

  }, [length, numAllowed, charAllowed, setPassword])

  return (
    <>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 bg-[#162238]">

        <h1 className="text-white text-center text-3xl font-semibold mb-4 whitespace-nowrap">
          Password Generator
        </h1>

        <div className="flex items-center bg-white rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="flex-1 outline-none py-2 px-3 text-black"
            placeholder="password"
            readOnly
          />

          <button className="bg-blue-700 text-white px-4 py-2 hover:bg-blue-800 shrink-0">
            Copy
          </button>
        </div>


      </div>

    </>
  )

}



export default App
