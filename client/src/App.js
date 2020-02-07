import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser, logoutUser } from './actions/authActions'
//Redux

import { Provider } from 'react-redux'
import store from './store'
//Pages
import Dismissal from './pages/Dismissal'
import Database from './pages/Database'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'
import Navbar from './components/Navbar'
import SignUp from './pages/SignUp'
import FamilyDashboard from './pages/FamilyDashboard'
import SocketBoilerPlate from './pages/socketBoilerPlate'
import AdminDashboard from './pages/AdminDashboard'
import Example from './components/NewNavBar'

// Checking browser for token
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

    // Redirect to login
    window.location.href = '/'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='row'>
          <div className='col-8 container'>
            <Router>
              <Navbar />
              {/* <Example /> */}
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
        </div>
      </Provider>
    )
  }
}

export default App
