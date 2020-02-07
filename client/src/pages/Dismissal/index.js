import React from 'react'
// import Jumbotron from '../components/Jumbotron'
import { Row, Column, Container } from '../../components/Grid'
import Waiting from '../../components/Containers/WaitingContainer'

const Dismissal = () => {
  return (
    <>
      <Container>
        <Row styling='row align-self-center'>
          <Column>{/* <Jumbotron title='Welcome to Harmony' lead='Dismissal' /> */}</Column>
        </Row>
        <Waiting />
      </Container>
    </>
  )
}

export default Dismissal
