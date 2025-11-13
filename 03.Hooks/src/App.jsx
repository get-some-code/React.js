import { useState } from "react";

function App() {

  let [counter,setCounter] = useState(5)

  // let counter = 5;

  const addValue = ()=>{
    setCounter(counter+1);
    console.log("clicked ",counter);
    // document.getElementById('first').textContent = `Counter value: ${counter}`;
    
  }

  const subtractValue = ()=>{
    setCounter(counter-1);
    console.log("clicked ",counter);
    // document.getElementById('first').textContent = `Counter value: ${counter}`;
  }

  return (
    <>

    <h1>Namaste Javascript!</h1>
    <h2 id='first'>Counter value: {counter}</h2>
    <button onClick={addValue}>Increment Value</button>
    <br />
    <button onClick={subtractValue}>Decrement Value</button>

    </>
    )
}

export default App
