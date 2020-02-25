import React from 'react'
import { Row, Column } from '../../Grid'
import Card from '../../Card'
import { addFamilyToWaitlist } from '../../../actions/familyActions'
// import socket.io client -- A client-side build of Socket.io
import openSocket from 'socket.io-client'
import { useSelector, useDispatch } from 'react-redux'
// open a webSocket on this port --this will change when deployed
import devSocket from '../../../utils/setdev'
const socket = openSocket(devSocket)

const Waiting = () => {
  const dispatch = useDispatch()
  const waitlist = useSelector(state => state.family.waitlist)
  // const [waitList, setWaitList] = useState(["No Parents waiting"]);
  console.log('waitList:', waitlist)

  socket.on('/waiting', data => {
    console.log(JSON.stringify(data, null, 2))
    dispatch(addFamilyToWaitlist(data.message.name))
    // setWaitList([data.message.name]);
  })
  // console.log("waitlist checking", waitList);
  return (
    <>
      <Row styling='justify-content-center'>
        <Column styling='align-self-center no-gutters'>
          <Card>
            <div className='container'>
              {waitlist.length > 0 ? (
                waitlist.map((parent, index) => (
                  <h5 key={index}>The {parent} family is here</h5>
                ))
              ) : (
                <h5>No parents waiting</h5>
              )}
            </div>
          </Card>
        </Column>
      </Row>
    </>
  )
}

export default Waiting
