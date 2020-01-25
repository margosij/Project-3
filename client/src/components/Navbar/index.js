import React, { useState, Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'
import NavLink from '../NavLink'
import { PropTypes } from 'prop-types'
import './style.css'

class Navbar extends Component {
   onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  state = {
     collapsed: true
   }

  toggleNavbar = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }

   classOne = this.state.collapsed
    ? 'collapse navbar-collapse'
    : 'collapse navbar-collapse show animated fadeIn'
   classTwo = this.state.collapsed
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right'

  render() {
    const { isAuthenticated, user } = this.props.auth
    const authLinks = (
      <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
        <NavLink navTitle='Home' to='/' />
        <NavLink navTitle='Sign Up' to='/signup' />
        <NavLink navTitle='Dismissal' to='/dismissal' />
        <NavLink navTitle='Database Dashboard' to='/database' />
        <NavLink navTitle='Family Dashboard' to='/family' />
        <NavLink navTitle='Admin Dashboard' to='/admin' />
        <NavLink navTitle='Socket.io Boiler Plate' to='/socket' />
      </ul>
    )
    const familyLinks= (
       <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
              <NavLink navTitle='Home' to='/' />
              <NavLink navTitle='Sign Up' to='/signup' />
              <NavLink navTitle='Dismissal' to='/dismissal' />
              <NavLink navTitle='Database Dashboard' to='/database' />
              <NavLink navTitle='Family Dashboard' to='/family' />
              <NavLink navTitle='Admin Dashboard' to='/admin' />
              <NavLink navTitle='Socket.io Boiler Plate' to='/socket' />
            </ul>
    )
    const guestLinks = (
      <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
        <NavLink navTitle='Home' to='/' />
        <NavLink navTitle='Sign Up' to='/signup' />
        <NavLink navTitle='Dismissal' to='/dismissal' />
        <NavLink navTitle='Database Dashboard' to='/database' />
        <NavLink navTitle='Family Dashboard' to='/family' />
        <NavLink navTitle='Admin Dashboard' to='/admin' />
        <NavLink navTitle='Socket.io Boiler Plate' to='/socket' />
      </ul>
    )
    return (
      <>
        <nav className='navbar navbar-expand-lg text-light m-0'>
          <button
            onClick={this.toggleNavbar}
            className={`${this.classTwo} bg-light`}
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
            className={`${this.classOne} pl-2 text-light`}
            id='navbarResponsive'
          >
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
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </nav>
      </>
    )
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps, { logoutUser })(Navbar)
