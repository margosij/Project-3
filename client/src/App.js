import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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


class App extends Component {
  render() {
    return (

  <Provider store={ store }>
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
