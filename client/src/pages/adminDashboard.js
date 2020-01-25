import testFamilyData from '../utils/socket/testData'
import React, { useState, useEffect } from 'react'
// import Jumbotron from '../components/Jumbotron'
import { Row, Column, Container } from '../components/Grid'
import API from '../utils/Api'
import TeacherContainer from '../components/TeacherContainer'
const adminID = '55e2670f6f2b3c22940cb99fb'
const testFamilyID = '5e28a91ba67da12288679abd'

const AdminDashboard = props => {
  const [ familyId, setFamilyId ] = useState(testFamilyID)
  const [ allFamilies, setAllFamilies ] = useState([])
  const [ allAdminH, setAllAdminsH ] = useState([])
  const [ singleFamilyData, setSingleFamilyData ] = useState({})
  // const [parents, setParents] = useState([])
  // const [students, setStudents] = useState([])
  // const [singleParent, setSingleParents] = useState({})
 
useEffect(() => {
  API.getAllFamilies()
    .then(res => {
      console.log(res)
      setAllFamilies(res)
    })
    .catch(err => console.log(err))
}, [])
  
useEffect(() => {
  API.getAllAdmins()
    .then(res => {
      console.log(res)
      setAllAdminsH(res)
    })
    .catch(err => console.log(err))
}, [])

  return (
      <>
          <Container styling='align-self-center'>
              <Row styling='row align-self-center'>
                  <Column>
                      {/* <Jumbotron title='Welcome to Harmony' lead='Admin Dashboard' /> */}
                      <TeacherContainer familyData={ testFamilyData } />
                  </Column>
              </Row>
              {/* <Admin {...props} /> */}
          </Container>
      </>
  )
}

export default AdminDashboard
