import React, { Component } from 'react'
import Jumbotron from '../../components/Jumbotron'
import Login from '../../components/Login/index'

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron title='Dismissed' lead='Harmony School of Enrichment' />
        <Login />
      </div>
    )
  }
}

export default Home
