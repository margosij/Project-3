import React from 'react'
import { Row, Column, Container } from '../Grid'
import ParentsContainer from '../parentsContainer'
import Parents from '../../utils/socket/parents'
import { List } from '../List'

const FamilyContainer = props => {
  return (
    <>
      <Row>
        <Container>
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
        </Container>
      </Row>
    </>
  )
}

export default FamilyContainer
