import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MazeMainComponent from './Mazemain'

function App() {
  const [level, setLevel] = useState(1)
  return (
    <>
      <MazeMainComponent/>
    </>
  )
}

export default App
