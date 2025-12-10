import { useState } from "react";
import "./index.css";
import Button from "./components/Button.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  const increase = () => {
    setError("");
    setCount(prev => prev + 1);
  };

  const decrease = () => {
    if (count <= 0) {
      setError("Count cannot go below 0");
      return;
    }
    setCount(prev => prev - 1);
  };

  const clear = () => {
    setCount(0);
    setNumber("");
    setError("");
  };

  const setValue = () => {
    if (number === "") return;

    if (Number(number) < 0) {
      setError("Negative numbers are not allowed");
      return;
    }

    setCount(Number(number));
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-slate-900 to-black text-white">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-10 py-12 shadow-2xl flex flex-col items-center gap-6">
        <h1 className="text-4xl font-extrabold tracking-wide">
          Counter
        </h1>

        <div className="px-6 py-2 rounded-full bg-black/40 text-xl font-semibold border border-white/20 shadow-inner">
          Count: {count}
        </div>

        <div className="flex gap-6 mt-2">
          <Button buttonText="+" click={increase} />
          <Button buttonText="-" click={decrease} />
          <Button buttonText="C" click={clear} />
        </div>

        <div className="flex gap-6 mt-2">
          <input
            type="number"
            value={number}
            className="border rounded p-2 text-white"
            onChange={(e) => {
              const value = e.target.value;
              setNumber(value);

              if (Number(value) < 0) {
                setError("Please enter postive numbers only!");
              } else {
                setError("");
              }
            }}
            placeholder="Enter"
          />
          <Button buttonText="Set" click={setValue} />
        </div>

        {error && (
          <p className="text-red-400 text-sm font-semibold mt-2">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
