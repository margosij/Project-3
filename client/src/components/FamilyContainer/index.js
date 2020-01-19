import React from 'react'
import { Row, Column, Container } from '../Grid'
import ParentsContainer from '../parentsContainer'
import { List } from '../List'
import StudentContainer from '../StudentContainer'

const FamilyContainer = props => {
  return (
    <>
      <Row>
        <Container>
          <Column>
            <List>
              {props.familyData.guardians ? (
                props.familyData.guardians.map((parents, index) => (
                  <ParentsContainer
                    key={Math.floor(Math.random() * 1000 + 1)}
                    name={`${parents.firstName} ${parents.lastName}`}
                    work={parents.workPhone}
                    home={parents.homePhone}
                    cell={parents.cellPhone}
                    email={parents.email}
                    relation={parents.relation}
                  />
                ))
              ) : (
                <div className='text-center'>
                  <div className='spinner-border' role='status'>
                    <span className='sr-only'>Loading...</span>
                  </div>
                </div>
              )}
            </List>
          </Column>
          <Column>
            <List>
              {props.familyData.students ? (
                props.familyData.students.map((students, index) => (
                  <StudentContainer
                    key={Math.floor(Math.random() * 1000 + 1)}
                    name={`${students.firstName} ${students.lastName}`}
                    work={students.workPhone}
                    home={students.homePhone}
                    cell={students.cellPhone}
                    email={students.email}
                    relation={students.relation}
                  />
                ))
              ) : (
                <div className='text-center'>
                  <div className='spinner-border' role='status'>
                    <span className='sr-only'>Loading...</span>
                  </div>
                </div>
              )}
            </List>
          </Column>
        </Container>
      </Row>
    </>
  )
}

export default FamilyContainer
