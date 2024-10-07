import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to={'/'}>Home</Link>
      <Link to={'/login'}>Login</Link>
      <Link to={'/product'}>Product</Link>
      <Link to={'/cart'}>Cart</Link>
      <Link to={'/signup'}>Signup</Link>
    </div>
  )
}

export default Navbar
