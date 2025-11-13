import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card1';
import Profilecard from  './components/profilecard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-3xl'>Cricket-o-Gram</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Profilecard username="Virat Kohli" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQ4cp2oXlPPHGJNKh-QlCDxKS1mz91f5MnA&s" />
        <Profilecard username="Rohit Sharma" photo="https://i.pinimg.com/474x/eb/d8/0f/ebd80fce7f49194bd9c0a1fcae168f12.jpg" />
        <Profilecard username="KL Rahul" photo="https://i.pinimg.com/736x/81/3d/1e/813d1e1dd25fffea71e603377423a400.jpg" />
        <Profilecard username="Shreyas Iyer" photo="https://documents.bcci.tv/resizedimageskirti/1563_compress.png" />
        <Profilecard username="Rishabh Pant" photo="https://documents.bcci.tv/resizedimageskirti/2972_compress.png" />
        <Profilecard username="Shubhman Gill" photo="https://d13ir53smqqeyp.cloudfront.net/fc-player-images/11533.png" /> 
      </div>

    </>
  )
}

export default App
