import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text 2x1 font-bold text-center text-pink-600 mb-6"> Welcome Back</h1>
          <div className="mb-4">
            <img src='/CBC-logo.jpg' className='rounded-full w-[100px] '/>
            <label className="block text-sm font-medium text-gray-700" htmlFor="username">
              Email: 
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email" defaultValue={email} onChange={(e)=>{
                console.log('your email is changed')
              }}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password" defaultValue={password}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"/>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition duration-200"
          >
            Login
          </button>
        <div className="mt-4 text-center">
          <Link to="/" className="text-pink-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
