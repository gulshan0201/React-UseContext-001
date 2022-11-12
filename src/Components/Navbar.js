import React, { useContext } from 'react'
import ThemeContext from './Context'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const { isLight, changeTheme } = useContext(ThemeContext)

  return (
    <div className='nav-bar'>
      <h1>Navbar</h1>
      <div className='link'>
        <Link to="/">Home</Link>
        <br />
        <Link to="/contact" >Contact</Link>
        <br />
        <Link to="/services">Services</Link>
        <br />
        <button className='btn' onClick={() => { changeTheme() }}>Toogle Theme {isLight ? "True" : "False"}</button>
      </div>
    </div >
  )
}

export default Navbar