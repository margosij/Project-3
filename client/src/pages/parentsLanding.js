import React from 'react'
import Jumbotron from '../components/Jumbotron'
import { Row, Column, Container } from '../components/Grid'
import Admin from '../utils/socket/admin'
import Parents from '../utils/socket/parents'
import API from '../utils/Api'
const parentID = '5e201b103bbbe7513cb80b19'

const ParentsDashboard = (props) => {
  
  
  const getParent = () => {
    API.getFamilies
  }
  return (
    <>
      <Container>
        <Row styling='align-self-center'>
          <Column>
            <Jumbotron
              title='Welcome to Harmony'
              lead='Parents Dashboard'
            />
          </Column>
        </Row>
        <Admin {...props} />
        <Parents {...props} />
      </Container>
    </>
  )
}

export default ParentsDashboard
