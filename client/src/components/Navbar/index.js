import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Navbar() {
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
        <div
          className={`${classOne} pl-2 text-light`}
          id='navbarResponsive'
        >
          <a className='navbar-brand' href='https://hsenrichment.harmonytx.org/'>
            <img
              src='https://harmonypublicschools.network/hsenrichment-new/wp-content/uploads/sites/111/2019/03/hsenrichment-houston-white-300px.png'
              width='150'
              height='80'
              alt='Harmony Logo'
            />
          </a>
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/dismissal'>
                Dismissal
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/database'>
                Database
              </Link>
            </li>
          </ul>
         
        </div>
      </nav>
    </>
  )
}

export default Navbar
