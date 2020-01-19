import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = props => {
  return (
    <li className='nav-item active'>
      <Link className='nav-link' to={props.to}>
        {props.navTitle}
      </Link>
    </li>
  )
}

export default NavLink
