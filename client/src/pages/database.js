import React, { useState, useEffect } from 'react'
import Jumbotron from '../components/Jumbotron'
import { Row, Column, Container } from '../components/Grid'

function Database() {
  return (
    <>
      <Container>
        <Row styling='row align-self-center'>
          <Column>
            <Jumbotron title='Welcome to Harmony' lead='Database'></Jumbotron>
          </Column>
        </Row>
      </Container>
    </>
  )
}

export default Database
