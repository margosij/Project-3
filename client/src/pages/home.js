import React from 'react'
import Jumbotron from '../components/Jumbotron'
import { Row, Column, Container } from '../components/Grid'
// import Geolocated from '../components/Geolocated/Geolocated'
import Login from './Login'


const Home = () => {
  return (
    <>
      <Container>
        <Row styling='row align-self-center'>
          <Column>
            <Jumbotron title='Welcome to Harmony' lead='Homepage' />
          </Column>
          {/* <Geolocated /> */}
        </Row>
        <Login />
      </Container>
    </>
  )
}

export default Home
