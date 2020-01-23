import React from 'react'
import Card from '../Card'
import { CheckInBtn } from '../Buttons'
import { ListItem } from '../List'
import './style.css'
const StudentContainer = props => {
  return (
      <>
          <ListItem styling='list-inline-item m-0'>
              <Card styling='studentProfile'>
                  <div className='card-body'>
                      <h6 className='card-title'>Name:</h6>
                      <p>{`${ props.firstName } ${ props.middleName } ${ props.lastName } ${ props.suffix }`}</p>
                      <h8 className='card-title'>Gender:</h8>
                      <p>{props.gender}</p>
                      <h8 className='card-title'>Grade:</h8>
                      <p>{props.gradeLevel}</p>
                      <h8 className='card-title'>Picked up?</h8>
                      <input type='checkbox' value='pickedUp'></input>
                  </div>
              </Card>
          </ListItem>
      </>
  )
}

export default StudentContainer
