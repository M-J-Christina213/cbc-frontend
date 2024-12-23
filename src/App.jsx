import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCart from './components/productCard'
import UserData from './components/userData'
import Testing from './components/testing'
import LoginPage  from './pages/loginPage'
import Homepage from './pages/homePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Homepage/>
    </>
  )
}

export default App
