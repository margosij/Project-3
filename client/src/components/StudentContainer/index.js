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
            <h5 className='card-title'>Name:</h5>
            <p>{`${props.firstName} ${props.middleName} ${props.lastName} ${props.suffix}`}</p>
            <h6 className='card-title'>Gender:</h6>
            <p>{props.gender}</p>
            <h6 className='card-title'>Grade:</h6>
            <p>{props.gradeLevel}</p>
          </div>
          <div className='card-footer'>
            <CheckInBtn name={props.firstName} {...props} />
          </div>
        </Card>
      </ListItem>
    </>
  )
}

export default StudentContainer
