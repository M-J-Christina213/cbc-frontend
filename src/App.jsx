import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCart from './components/productCard'
import UserData from './components/userData'
import Testing from './components/testing'
import LoginPage from './pages/loginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LoginPage/>
    </>
  )
}

export default App
