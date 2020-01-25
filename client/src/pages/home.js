import React, { Component } from 'react'
import Jumbotron from '../components/Jumbotron'
import { Row, Column, Container } from '../components/Grid'
import Modal from '../components/Modal'
import Login from './Login/index'

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row styling='row align-self-center'>
            <Column>
              <Jumbotron title='Welcome to Harmony' lead='Homepage' />
            </Column>
          </Row>
          <Login></Login>
        </Container>
        <Modal />
      </div>
    )
  }
}

export default Home
