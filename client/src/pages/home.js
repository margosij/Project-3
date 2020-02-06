import React, { Component } from 'react'
import Jumbotron from '../components/Jumbotron'
import { Row, Column, Container } from '../components/Grid'
import Login from './Login/index'

class Home extends Component {
  render() {
    return (
      <div>
          <Row styling='row align-self-center'>
            <Column>
              <Jumbotron title='Dismissed' lead='Harmony School of Enrichment' />
            </Column>
          </Row>
          <Login/>
      </div>
    )
  }
}

export default Home
