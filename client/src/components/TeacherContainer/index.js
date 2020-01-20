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
import Api from '../../utils/Api'
const parentTestId = '5e25cddb8325d037e01f4557'

const TeacherContainer = props => {
    // state={
    //     familyArrived: []
    // }
    // componentDidMount() {
    //     API.getFamilyById()
    // .then(res => {this.setState({ familyArrived: res })})
    // .catch(err => console.log(err))
    // }
    return (
        <>
            <Container>
                <Row styling='row-cols-1 row-cols-md-2"'>
                    <Card>
                        <CardHeader
                title={ 'Child Pickup' }
              />
                        <Container>
                            <Row styling='row-cols-1 row-cols-md-2'>
                                <Column styling='px-0'>
                                    <Card styling='teacherContainer'>
                                        <CardHeader title='Parent to Pick up Child' />
                                        <List>
                                            {/* {Api.getFamilyById().parentTestId.familyLastName} */}
                                        </List>
                                        {/* <List styling='list-inline'>
                                            {props.familyData.guardians ? (
                          props.familyData.guardians.map((parents, index) => (
                              <ParentsContainer
                              key={ Math.floor(Math.random() * 1000 + 1) }
                              name={ `${ parents.firstName } ${ parents.lastName }` }
                              relation={ parents.relation }
                            />
                          ))
                        ) : (
                            <div className='text-center'>
                                <div className='spinner-border' role='status'>
                                    <span className='sr-only'>Loading...</span>
                                </div>
                            </div>
                        )}
                                        </List> */}
                                    </Card>
                                </Column>
                                <Column styling='px-0 mx-0'>
                                    <Card styling='studentCard'>
                                        <CardHeader title='Children' />
                                        <List></List>
                                        {/* <List styling='list-inline'>
                                            {props.familyData.students ? (
                          props.familyData.students.map((students, index) => (
                              <StudentContainer
                              key={ Math.floor(Math.random() * 1000 + 1) }
                              firstName={ students.firstName }
                              middleName={ students.middleName }
                              lastName={ students.lastName }
                              gender={ students.gender }
                              gradeLevel={ students.gradeLevel }
                            />
                          ))
                        ) : (
                            <div className='text-center'>
                                <div className='spinner-border' role='status'>
                                    <span className='sr-only'>Loading...</span>
                                </div>
                            </div>
                        )}
                                        </List> */}
                                    </Card>
                                </Column>
                            </Row>
                            {/* <Row>
                                <Column>
                                    <Card styling='card-body mx-0'>
                                        <CardHeader title='Geolocation Section or Whatever....' />
                                    </Card>
                                </Column>
                            </Row> */}
                        </Container>
                    </Card>
                </Row>
            </Container>
        </>
    )
  }

export default TeacherContainer