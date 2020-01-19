import React from 'react'
import { Row, Col, Container, Column } from '../Grid'
import Card from '../Card'
import StudentContainer from '../StudentContainer'

const ParentsContainer = (props) => {
  return <>
    <Container>
      <Row>
        <Column>
          <Card>
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
            </div>
        </Card>
        </Column>
    </Row>

    </Container>
    
  </>
}

export default ParentsContainer
