import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
   <>
   <header className='headerParent'>
    <NavLink className="headerLinks" to={"/"} > HomePage</NavLink>
    <NavLink className="headerLinks" to={"/employees"} > Employees</NavLink>
   </header>
   </>
  )
}

export default Header