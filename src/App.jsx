import { useState } from 'react'
import './App.css'
import LoginPage  from './pages/loginPage'
import Homepage from './pages/homePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpPage from './pages/signUpPage'
import AdminHomepage from './pages/admin/adminHomePage'
import { Toaster } from 'react-hot-toast'
import { GoogleOAuthProvider } from '@react-oauth/google'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <BrowserRouter>
    <Toaster position='top-right'/>
    <GoogleOAuthProvider clientId='379936970749-rc95kiaddidqut5i5klqkt7cjp3m48vq.apps.googleusercontent.com'>
     <Routes>
      <Route path="/*" element={<Homepage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path="/admin/*" element={<AdminHomepage/>}/>
      <Route path="*" element={<h1>404: Page Not Found</h1>} />
    </Routes>
    </GoogleOAuthProvider>
    </BrowserRouter>
    
     
    </div>
  )
}

export default App
