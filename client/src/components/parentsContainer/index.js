import React from 'react'
import {ListItem} from '../List'
import Card from '../Card'
import { CheckInBtn } from '../Buttons'
import './style.css'

const ParentsContainer = props => {
  return (
    <>
      <ListItem styling='list-inline-item m-0'>
        <Card>
          <div className='card-body'>
            <p className='card-title'>Name: {props.name}</p>
            <p className='card-title'>Relation: {props.relation}</p>
            <p className='card-title'>Home Phone: {props.home}</p>
            <p className='card-title'>Work Phone: {props.work}</p>
            <p className='card-title'>Cell Phone: {props.cell}</p>
            <p className='card-title'>Email: {props.email}</p>
          </div>
          <div className='card-footer'>
            <CheckInBtn {...props} />
          </div>
        </Card>
      </ListItem>
    </>
  )
}

export default ParentsContainer
