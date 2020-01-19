import React, { useState, useEffect } from 'react'
import Jumbotron from '../components/Jumbotron'
import { Row, Column, Container } from '../components/Grid'
import FamilyContainer from '../components/FamilyContainer'
import Parents from '../utils/socket/parents'
import API from '../utils/Api'
const familyID = '5e23fd723d93932da04241ec'

const FamilyDashboard = props => {
  const [familyId, setFamilyId] = useState(familyID)
  const [allFamilies, setAllFamilies] = useState([])
  const [singleFamilyData, setSingleFamilyData] = useState({})
  const [parents, setParents] = useState([])
  const [students, setStudents] = useState([])
  const [singleParent, setSingleParents] = useState({})

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

  const getParent = () => {
    API.getFamilyById(familyId)
      .then(res => {
        console.log(res)
        setSingleParents(res)
      })
      .catch(err => console.log(err))
  }

  const getAllParents = () => {
    API.getAllFamilies()
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Container>
        <Row styling='align-self-center'>
          <Column>
            <Jumbotron title='Welcome to Harmony' lead='Family Dashboard' />
          </Column>
        </Row>
        <Container>
          <FamilyContainer familyData={singleFamilyData}/>
        </Container>
      </Container>
    </>
  )
}

export default FamilyDashboard
