import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dismissal from './pages/dismissal'
import Database from './pages/database'
import Home from './pages/home'
import NoMatch from './pages/nomatch'
import Navbar from './components/Navbar'
import SignUp from './pages/SignUp'
import ParentsLanding from './pages/parents'
import SocketBoilerPlate from './pages/socketBoilerPlate'

function App() {
  return (
    <div className='mx-auto'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dismissal' component={Dismissal} />
          <Route exact path='/database' component={Database} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/parents' component={ParentsLanding} />
          <Route exact path='/socket' component={SocketBoilerPlate} />
          <Route exact path='*' component={NoMatch} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
