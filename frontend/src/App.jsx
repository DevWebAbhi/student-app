import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './AllRoutes'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        <Navbar/>
        <AllRoutes/>
     </BrowserRouter>
    </>
  )
}

export default App
