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
    <ProductCart name="Laptop" price="$99.99" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fnilsonline.lk%2Flisa-beige-shirt-24000564&psig=AOvVaw0__iY4TN8pRuyTpX9J1QUJ&ust=1734849184444000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCh2f-euIoDFQAAAAAdAAAAABAE"> 

    </ProductCart>
    <ProductCart name="Iphone 16" price="$499"> 

    </ProductCart>
    
      
    </>
  )
}

export default App
