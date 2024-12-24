import { useState } from 'react'
import './App.css'
import ProductCart from './components/productCard'
import UserData from './components/userData'
import Testing from './components/testing'
import LoginPage  from './pages/loginPage'
import Homepage from './pages/homePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignInPage from './pages/signInPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Routes path="/*">
      <Route path="/" element={<SignInPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/*" element={<h1>404 error </h1>} />
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
