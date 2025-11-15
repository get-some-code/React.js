import { useState } from 'react'
import './App.css'
import Button from './components/button' 

function App() {
  const [color, setColor] = useState("gray")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>

        <h1>Hello Js!</h1>
        <Button buttonName="Red" buttonColor="red" setColor={setColor}/>
        <Button buttonName="Blue" buttonColor="blue" setColor={setColor}/>
        <Button buttonName="Green" buttonColor="green" setColor={setColor}/>
        <Button buttonName="Lavender" buttonColor="lavender" setColor={setColor}/>
        <Button buttonName="Olive" buttonColor="olive" setColor={setColor}/>
        <Button buttonName="Black" buttonColor="black" setColor={setColor}/>
        <Button buttonName="White" buttonColor="white" setColor={setColor}/>

      </div>
    </>
  )
}

export default App
