/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-indent */
/* eslint-disable array-bracket-spacing */
import React, { useState } from 'react';
import Card from '../Card';
import CardHeader from '../CardHeader';
import { addFamilyToWaitlist } from '../../actions/familyActions';
// import socket.io client -- A client-side build of Socket.io
import openSocket from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
// open a webSocket on this port --this will change when deployed
const socket = openSocket('https://dismissal-app.herokuapp.com/');

const Waiting = () => {
  const dispatch = useDispatch();
  const waitlist = useSelector(state => state.family.waitlist);
  // const [waitList, setWaitList] = useState(["No Parents waiting"]);
  console.log('waitList:', waitlist);

  socket.on('/waiting', data => {
    console.log(JSON.stringify(data, null, 2));
    dispatch(addFamilyToWaitlist(data.message.name));
    // setWaitList([data.message.name]);
  });
  // console.log("waitlist checking", waitList);
  return (
    <>
      <Card>
        <CardHeader title="Waiting" />
        {waitlist.length > 0 ? (
          waitlist.map((parent, index) => <p key={ index }>{parent} is here</p>)
        ) : (
          <h1>No parents waiting</h1>
        )}
      </Card>
    </>
  );
};

export default Waiting;
