import React from 'react'
import Jumbotron from '../components/Jumbotron'
import { Row, Column, Container } from '../components/Grid'

const Dismissal = () => {
  return (
    <>
      <Container>
        <Row styling='row align-self-center'>
          <Column>
            <Jumbotron title='Welcome to Harmony' lead='Dismissal' />
          </Column>
        </Row>
      </Container>
    </>
  )
}

export default Dismissal
