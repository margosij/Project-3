import React from 'react'
import { Row, Column } from '../../Grid'

const FormContainer = props => {
  return (
    <Row styling='justify-content-center mx-0'>
      <Column size='sm-12 md-4 lg-4 xl-4'>{props.children}</Column>
    </Row>
  )
}
export default FormContainer
