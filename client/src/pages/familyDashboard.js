import React, { useState, useEffect } from 'react'
// import Jumbotron from '../components/Jumbotron'
import { Row, Column, Container } from '../components/Grid'
import FamilyContainer from '../components/FamilyContainer'
import API from '../utils/Api'
const testFamilyID = '5e23fd723d93932da04241ec'

const FamilyDashboard = props => {
  const [familyId, setFamilyId] = useState(testFamilyID)
  const [allFamilies, setAllFamilies] = useState([])
  const [singleFamilyData, setSingleFamilyData] = useState({})
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
    API.getFamilyById(familyId)
      .then(res => {
        console.log(res)
        setSingleFamilyData(res)
      })
      .catch(err => console.log(err))
  }, [])

  // const getParent = () => {
  //   API.getFamilyById(familyId)
  //     .then(res => {
  //       console.log(res)
  //       setSingleParents(res)
  //     })
  //     .catch(err => console.log(err))
  // }

  // const getAllParents = () => {
  //   API.getAllFamilies()
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => console.log(err))
  // }

  return (
    <>
      <Container>
        <h1 className='text-center'>Family Dashboard</h1>
        <Row styling='align-items-center justify-content-center my-5'>
          <Column
            size='sm-4 md-6 lg-8 xl-10'
            styling='align-self-center no-gutters'
          >
            <FamilyContainer familyData={singleFamilyData} />
          </Column>
        </Row>
      </Container>
    </>
  )
}

export default FamilyDashboard
