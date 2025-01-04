import { useState } from 'react'
import './App.css'
import ProductCart from './components/productCard'
import UserData from './components/userData'
import LoginPage  from './pages/loginPage'
import Homepage from './pages/homePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpPage from './pages/signUpPage'
import AdminHomepage from './pages/admin/adminHomePage'
import { Toaster } from 'react-hot-toast'
import FileUploadTest from './pages/home/test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Toaster position='top-right'/>
     <Routes path="/*">
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path="/admin/*" element={<AdminHomepage/>}/>
      <Route path="/*" element={<Homepage/>} />
      <Route path="/test" element={<FileUploadTest/>} />
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
