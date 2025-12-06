import { useState, useCallback, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "@#$%&*()+-_{}[]$₹?/:;";

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    if (!password) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          // optionally show a toast / visual feedback
        })
        .catch(() => {
          // fallback if clipboard API fails
          if (passwordRef.current) {
            passwordRef.current.select();
            document.execCommand("copy");
            window.getSelection()?.removeAllRanges();
          }
        });
    } else if (passwordRef.current) {
      passwordRef.current.select();
      document.execCommand("copy");
      window.getSelection()?.removeAllRanges();
    }
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-gray-700 text-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 hover:bg-blue-800 
             active:scale-95 active:bg-blue-900
             text-white px-3 py-0.5 shrink-0 
             transition-all duration-200"
            title="Copy"
          >
            copy
          </button>


        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-x-3">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={25}
                value={length}
                className="cursor-pointer"
                onChange={(e) => setLength(Number(e.target.value))}
              />
              <label className="ml-2">Length: {length}</label>
            </div>
          </div>

          <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                checked={numAllowed}
                id="numberInput"
                onChange={() => setNumAllowed((prev) => !prev)}
              />
              <label htmlFor="numberInput" className="ml-1">
                Numbers
              </label>
            </div>

            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                checked={charAllowed}
                id="characterInput"
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="characterInput" className="ml-1">
                Characters
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={passwordGenerator}
            className="px-4 py-1 bg-green-600 text-white rounded"
          >
            Generate
          </button>
          <button
            onClick={() => {
              setPassword("");
            }}
            className="px-4 py-1 bg-red-600 text-white rounded"
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
