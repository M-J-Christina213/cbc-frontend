import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCart from './components/productCard'
import UserData from './components/userData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductCart> 

    </ProductCart>
    <ProductCart> 

    </ProductCart>
    <UserData> 
      
    </UserData>
      
    </>
  )
}

export default App
