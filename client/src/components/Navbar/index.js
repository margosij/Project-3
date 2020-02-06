import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'
import NavLink from '../NavLink'
import PropTypes from 'prop-types'
import './style.css'
import Logo from '../Logo'
import { Link } from 'react-router-dom'
class Navbar extends Component {
  state = {
    collapsed: true
  }

  onLogoutClick(e) {
    e.preventDefault()
    this.props.logoutUser()
    console.log('this.props')
  }

  toggleNavbar = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }

  render() {
    console.log('this.props', this.props)
    const classOne = this.state.collapsed
      ? 'collapse navbar-collapse'
      : 'collapse navbar-collapse show animated fadeIn'
    const classTwo = this.state.collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right'

    const { isAuthenticated, user } = this.props.auth
    const authLinks = (
      <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
        <NavLink navTitle='Home' to='/' />
        <NavLink navTitle='Dismissal' to='/dismissal' />
        <NavLink navTitle='Database Dashboard' to='/database' />
        <NavLink navTitle='Family Dashboard' to='/family' />
        <NavLink navTitle='Admin Dashboard' to='/admin' />
        <li className='nav-item float-right'>
          <a href='/profile' onClick={this.onLogoutClick.bind(this)} className='nav-link text-light'>
            <img
              className='rounded-circle'
              src={ user.avatar }
              alt={ user.name }
              style={ { width: '25px', marginRight: '5px' } }
              // title='You must have a Gravatar connected to your email to display an image'
            />{' '}
            Logout
          </a>
        </li>
      </ul>
    )
    // const familyLinks = (
    //   <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
    //     <NavLink navTitle='Home' to='/' />
    //     <NavLink navTitle='Sign Up' to='/signup' />
    //     <NavLink navTitle='Dismissal' to='/dismissal' />
    //     <NavLink navTitle='Database Dashboard' to='/database' />
    //     <NavLink navTitle='Family Dashboard' to='/family' />
    //     <NavLink navTitle='Admin Dashboard' to='/admin' />
    //     <NavLink navTitle='Socket.io Boiler Plate' to='/socket' />
    //   </ul>
    // )
    const guestLinks = (
      <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
        <NavLink navTitle='Home' to='/' />
        {/* <NavLink navTitle='Sign Up' to='/signup' /> */}
        {/* <NavLink navTitle='Dismissal' to='/dismissal' /> */}
        {/* <NavLink navTitle='Database Dashboard' to='/database' /> */}
        {/* <NavLink navTitle='Family Dashboard' to='/family' /> */}
        {/* <NavLink navTitle='Admin Dashboard' to='/admin' /> */}
        {/* <NavLink navTitle='Socket.io Boiler Plate' to='/socket' /> */}
      </ul>
    )
    return (
      <div>
        <nav className='navbar navbar-expand-lg text-light'>
          <button
            onClick={this.toggleNavbar}
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
            <Logo />
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </nav>
      </div>
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
