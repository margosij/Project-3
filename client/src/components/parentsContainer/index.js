import React from 'react'
import { Row, Col, Container, Column } from '../Grid'
import Card from '../Card'
import StudentContainer from '../StudentContainer'
import { CheckInBtn } from '../Buttons'

const ParentsContainer = (props) => {
  return <>
    <Container>
      <Row>
        <Column>
          <Card>
            <div className="card-body">
              <h5 className="card-title">Name: {props.name}</h5>
              <h5 className="card-title">Relation: {props.relation}</h5>
              <h5 className="card-title">Home Phone: {props.home}</h5>
              <h5 className="card-title">Work Phone: {props.work}</h5>
              <h5 className="card-title">Cell Phone: {props.cell}</h5>
              <h5 className="card-title">Email: {props.email}</h5>
            </div>
            <div className='card-footer'>
              <CheckInBtn {...props} />
            </div>
        </Card>
        </Column>
    </Row>

    </Container>
    
  </>
}

export default ParentsContainer
