import React from 'react'
import Jumbotron from '../components/Jumbotron'
import { Row, Column, Container } from '../components/Grid'
import ParentsContainer from '../components/parentsContainer'
import Parents from '../utils/socket/parents'
import API from '../utils/Api'
const familyID = '5e201b103bbbe7513cb80b19'

const FamilyDashboard = (props) => {
  
  const getParent = () => {
    API.getFamilyById(familyID).then(res => {
      console.log(res)
    }).catch(err => console.log(err))
  }
  
  const getAllParents = () => {
    API.getAllFamilies().then(res => {
      console.log(res)
    }).catch(err => console.log(err))
  }

  getParent()
  getAllParents()

  return (
    <>
      <Container>
        <Row styling='align-self-center'>
          <Column>
            <Jumbotron
              title='Welcome to Harmony'
              lead='Family Dashboard'
            />
          </Column>
        </Row>
        <ParentsContainer />
        <Parents {...props} />
      </Container>
    </>
  )
}

export default FamilyDashboard
