import React from 'react'
import Jumbotron from '../components/Jumbotron'
import { Row, Column, Container } from '../components/Grid'
import Admin from '../utils/socket/admin'

function Database() {
  return (
    <>
      <Container>
        <Row styling='row align-self-center'>
          <Column>
            <Jumbotron title='Welcome to Harmony' lead='Database'></Jumbotron>
          </Column>
        </Row>
        <Admin />
      </Container>
    </>
  )
}

export default Database
