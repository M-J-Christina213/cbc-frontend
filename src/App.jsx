import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCart from './components/productCard'
import UserData from './components/userData'
import Testing from './components/testing'
import LoginPage  from './pages/loginPage'
import Homepage from './pages/homePage'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    </BrowserRouter>
     
    </>
  )
}

export default App
