import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Product from './components/Product'
import Cart from './components/Cart'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/product' element={<Product/>}/>
  <Route path='/cart' element={<Cart/>}/>
</Routes>
    </>
  )
}

export default App
