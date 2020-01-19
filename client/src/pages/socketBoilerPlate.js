import React from 'react'
import Jumbotron from '../components/Jumbotron'
import { Row, Column, Container } from '../components/Grid'
import Admin from '../utils/socket/admin'
import Parents from '../utils/socket/parents'
// import socket.io client -- A client-side build of Socket.io
import openSocket from 'socket.io-client'
// open a webSocket on this port --this will change when deployed
const socket = openSocket('http://localhost:3001')

// "socket.on('Hello there', function()) ---listen for a data with a 'Hello there' tag, and then complete function---the function is whatever you want it to be or do.
// "socket.emit('Hello there', data) --- emit a broadcast to all browsers with a tag of 'Hello there'. data has to be in the form of an object ex. {data:'I Heard you'}
// whatever tag is used, it has to be added to io section in Server.js

const SocketBoilerPlate = (props) => {
  return (
    <>
      <Container>
        <Row styling='row align-self-center'>
          <Column>
            <Jumbotron
              title='Welcome to Harmony'
              lead='Socket Boiler Plate'
            />
          </Column>
        </Row>
        <Admin {...props} />
        <Parents {...props} />
      </Container>
    </>
  )
}

export default SocketBoilerPlate
