import React from 'react'
import Jumbotron from '../components/Jumbotron'
import { Row, Column, Container } from '../components/Grid'
import Admin from '../utils/socket/admin'
import Parents from '../utils/socket/parents'
import API from '../utils/Api'
const adminID = '5e23fd723d93932da04241f6'
const AdminDashboard = props => {
  const getAnAdmin = () => {
    API.getAnAdminById(adminID)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  const getAllAdmins = () => {
    API.getAllFamilies()
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }
  getAnAdmin()
  getAllAdmins()
  return (
    <>
      <Container>
        <Row styling='row align-self-center'>
          <Column>
            <Jumbotron title='Welcome to Harmony' lead='Admin Dashboard' />
          </Column>
        </Row>
        <Admin {...props} />
      </Container>
    </>
  )
}

export default AdminDashboard
