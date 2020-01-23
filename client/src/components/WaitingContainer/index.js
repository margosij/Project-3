import React, { useState } from 'react'
import Card from '../Card'
import CardHeader from '../CardHeader'
// import socket.io client -- A client-side build of Socket.io
import openSocket from 'socket.io-client'
// open a webSocket on this port --this will change when deployed
const socket = openSocket('http://localhost:3001')

const Waiting = () => {
  const [ waitList, setWaitList ] = useState([ 'No Parents waiting' ])

  socket.on('/waiting', data => {
    console.log(data)
     setWaitList(waitList.push(data))
  })
  console.log('waitlist checking', waitList)
  return (
      <>
          <Card>
              <CardHeader title='Waiting' />
              {waitList.length ? (
          waitList.map((parent, index) => <p key={ index }>{parent} is here</p>)
        ) : (
            <h1>No parents waiting</h1>
        )}
          </Card>
      </>
  )
}

export default Waiting
