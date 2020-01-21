import React from 'react'
import { Container, Column, Row } from '../Grid'
// import { AppProvider, Page } from '@shopify/polaris'
// import DataTable from './DataTable'
// import './style.css'
import Card from '../Card'
import CardHeader from '../CardHeader'
import ParentsContainer from '../parentsContainer'
import { List } from '../List'
import StudentContainer from '../StudentContainer'
const parentTestId = '5e2670f6f2b3c22940cb99f1'


const TeacherContainer = props => {
console.log('props:', props)


  return (
    <>
      <Container>
        <Row styling='row-cols-1 row-cols-md-2"'>
          <Card>
            <CardHeader title={'Child Pickup'} />
            <Container>
              <Row styling='row-cols-1 row-cols-md-2'>
                <Column styling='px-0'>
                  <Card styling='teacherContainer'>
                    <CardHeader title='Parent to Pick up Child' />
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
                  </Card>
                </Column>
                <Column styling='px-0 mx-0'>
                  <Card styling='studentCard'>
                    <CardHeader title='Children' />
                    <List>
                      {/* {props.familyData.guardians.map((parents) => 
                                                <ParentsContainer
                                                id=parentTestId
                                                students={ parents.students }
                                                />
                                                )} */}
                    </List>
                  </Card>
                </Column>
              </Row>
            </Container>
          </Card>
        </Row>
      </Container>
    </>
  )
}

export default TeacherContainer
