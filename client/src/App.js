import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser, logoutUser } from './actions/authActions'

import { Provider } from 'react-redux'
import store from './store'

import Dismissal from './pages/dismissal'
import Database from './pages/database'
import Home from './pages/home'
import NoMatch from './pages/nomatch'
import Navbar from './components/Navbar'
import SignUp from './pages/SignUp'
import FamilyDashboard from './pages/familyDashboard'
import SocketBoilerPlate from './pages/socketBoilerPlate'
import AdminDashboard from './pages/adminDashboard'
import Login from './pages/Login'

// Check for token
if (localStorage.jwtToken) {

  // Set auth token header auth
  setAuthToken(localStorage.jwtToken)
  
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken)
  
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded))

  // Check for expired token
  const currentTime = Date.now() / 1000
  
  if (decoded.exp < currentTime) {
  
    // Logout user
    store.dispatch(logoutUser())
  
    // TODO: Clear current Profile

    // Redirect to login
    window.location.href = '/login'
  }
}

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className='mx-auto'>
          <Router>
            <Navbar />
            {/* <Login /> */}
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/dismissal' component={Dismissal} />
              <Route exact path='/database' component={Database} />
              <Route exact path='/signup' component={SignUp} />
              <Route exact path='/family' component={FamilyDashboard} />
              <Route exact path='/admin' component={AdminDashboard} />
              <Route exact path='/socket' component={SocketBoilerPlate} />
              <Route exact path='*' component={NoMatch} />
            </Switch>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
