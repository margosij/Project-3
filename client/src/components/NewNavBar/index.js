// import React, { useState } from 'react'
// import { connect } from 'react-redux'
// import { logoutUser } from '../../actions/authActions'

// import PropTypes from 'prop-types'
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText
// } from 'reactstrap'
// import Logo from '../Logo'

// const Example = props => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [authenticated, setAuthenticated] = useState({
//     isAuthenticated: false,
//     isAdmin: false
//   })

//   const toggle = () => setIsOpen(!isOpen)
//   const onLogoutClick = e => {
//     e.preventDefault()
//     this.props.logoutUser()
//     console.log('this.props')
//   }
//   const { isAuthenticated, user } = this.props.auth
//   const authLinks = (
//     <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
//       <NavLink navTitle='Home' to='/' />
//       <NavLink navTitle='Dismissal' to='/dismissal' />
//       <NavLink navTitle='Database Dashboard' to='/database' />
//       <NavLink navTitle='Family Dashboard' to='/family' />
//       <NavLink navTitle='Admin Dashboard' to='/admin' />
//       <li className='nav-item float-right'>
//         <a href='/profile' onClick={this.onLogoutClick.bind(this)} className='nav-link text-light'>
//           <img
//             className='rounded-circle'
//             src={user.avatar}
//             alt={user.name}
//             style={{ width: '25px', marginRight: '5px' }}
//             // title='You must have a Gravatar connected to your email to display an image'
//           />{' '}
//           Logout
//         </a>
//       </li>
//     </ul>
//   )

//   const guestLinks = (
//     <ul className='navbar-nav mr-auto'>
//       {/* <NavLink navTitle='Home' to='/' /> */}
//       {/* <NavLink navTitle='Sign Up' to='/signup' /> */}
//       {/* <NavLink navTitle='Dismissal' to='/dismissal' /> */}
//       {/* <NavLink navTitle='Database Dashboard' to='/database' /> */}
//       {/* <NavLink navTitle='Family Dashboard' to='/family' /> */}
//       {/* <NavLink navTitle='Admin Dashboard' to='/admin' /> */}
//       {/* <NavLink navTitle='Socket.io Boiler Plate' to='/socket' /> */}
//     </ul>
//   )
 
//   return (
//     <div>
//       <Navbar dark expand='md' style={{ backgroundColor: '#044694' }}>
//         <NavbarBrand href='/'>
//           <Logo />
//         </NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className='mr-auto' navbar>
//             <NavItem>
//               <NavLink href='/components/'>Components</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href='https://github.com/reactstrap/reactstrap'>GitHub</NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Options
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>Option 1</DropdownItem>
//                 <DropdownItem>Option 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem>Reset</DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//           {isAuthenticated ? authLinks : guestLinks}
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//       </Navbar>
//     </div>
//   )

// }
// Navbar.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// }

// const mapStateToProps = state => {
//   setAuthenticated(state.auth)
// }

// export default connect(mapStateToProps, { logoutUser })(Example)
