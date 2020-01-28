import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'
import NavLink from '../NavLink'
import PropTypes from 'prop-types'
import './style.css'

class Navbar extends Component {
  
    state = {
      collapsed: true
    };

  onLogoutClick(e) {
    e.preventDefault()
    this.props.logoutUser()
    console.log('this.props', )
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
                <a href='' onClick={ this.onLogoutClick.bind(this) } className='nav-link text-light float-left'>
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
            onClick={ this.toggleNavbar }
            className={ `${ classTwo } bg-light` }
            type='button'
            data-toggle='collapse'
            data-target='#navbarResponsive'
            aria-controls='navbarResponsive'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
                    <span className='navbar-toggler-icon' />
                </button>
                <div className={ `${ classOne } pl-2 text-light` } id='navbarResponsive'>
                    <a className='navbar-brand' href='https://hsenrichment.harmonytx.org/'>
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
