import React from 'react'
import { ListItem } from '../../List'
import Card from '../../Card'
// import CheckInBtn from '../../Buttons'
// import Geolocated from '../../Geolocated'
import './style.css'

const ParentsContainer = props => {
  console.log('props:', props)

  return (
    <>
      <ListItem styling='list-inline-item m-0'>
        <Card styling='border-0'>
          <div className='card-body border-0'>
            <p className='card-title'>Name: {props.name}</p>
            <p className='card-title'>Relation: {props.relation}</p>
            <p className='card-title'>Home Phone: {props.home}</p>
            <p className='card-title'>Work Phone: {props.work}</p>
            <p className='card-title'>Cell Phone: {props.cell}</p>
            <p className='card-title'>Email: {props.email}</p>
          </div>
          {/* <div className='card-footer'>
            <CheckInBtn name={props.name} {...props} />
            <Geolocated  {...props} />
          </div> */}
        </Card>
      </ListItem>
    </>
  )
}

export default ParentsContainer
