import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCart from './components/productCard'
import UserData from './components/userData'
import Testing from './components/testing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductCart name="Laptop" price="$99.99" src="https://nilsonline.lk/image/cache/catalog/nils/product/24000564/57-612x875.jpg"> 

    </ProductCart>
    <ProductCart name="Iphone 16" price="$499"> 

    </ProductCart>
    
    <Testing> </Testing>
    </>
  )
}

export default App
