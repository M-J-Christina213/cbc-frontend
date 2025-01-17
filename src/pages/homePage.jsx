import { Link, Routes, Route } from 'react-router-dom';
import Header from '../components/header';
import LoginPage from './loginPage';

export default function Homepage() {
  return (
    
    <div className="h-screen w-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
       <Header/>
        <Routes path="/*">
         <Route path='/' element={<h1> Home Page </h1>} />
         <Route path='/login' element={<LoginPage/>} />
        </Routes>
      
    </div>
  );
}