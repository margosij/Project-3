import React, { useState } from 'react'
import NavLink from '../NavLink'
import './style.css'

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  const classOne = collapsed
    ? 'collapse navbar-collapse'
    : 'collapse navbar-collapse show animated fadeIn'
  const classTwo = collapsed
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right'

  return (
    <>
      <nav className='navbar navbar-expand-lg text-light m-0'>
        <button
          onClick={toggleNavbar}
          className={`${classTwo} bg-light`}
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className={`${classOne} pl-2 text-light`} id='navbarResponsive'>
          <a
            className='navbar-brand'
            href='https://hsenrichment.harmonytx.org/'
          >
            <img
              src='https://harmonypublicschools.network/hsenrichment-new/wp-content/uploads/sites/111/2019/03/hsenrichment-houston-white-300px.png'
              width='150'
              height='80'
              alt='Harmony Logo'
            />
          </a>
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <NavLink navTitle='Home' to='/' />
            <NavLink navTitle='Sign Up' to='/signup' />
            <NavLink navTitle='Dismissal' to='/dismissal' />
            <NavLink navTitle='Database Dashboard' to='/database' />
            <NavLink navTitle='Family Dashboard' to='/family' />
            <NavLink navTitle='Admin Dashboard' to='/admin' />
            <NavLink navTitle='Socket.io Boiler Plate' to='/socket' />
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
