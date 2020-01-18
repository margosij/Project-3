import familyTestData from './testData'
import Card from '../../components/Card'
import React, { Component } from 'react'
import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:3001')

class Parents extends Component {
  state = {
    familyId: familyTestData,
    timestamp: Date.now()
  }

  componentDidMount() {
    socket.emit('arrived', { time: this.state.timestamp })
    socket.emit('arrived', { familyId: this.state.familyId })
  }

  handleEmit = function() {
    console.log(this.state.familyId)
    socket.emit('arrived', this.state.familyId)
  }
  render() {
    return (
      <>
        <Card>
          <div className='card-body'>
            <h5 className='card-title'>Socket Emitter Test</h5>
            <p className='card-text'>
              With supporting text below as a natural lead-in to additional
              content. This is the timer value: {this.state.timestamp}
            </p>
            <a href='#' className='btn btn-primary' onClick={this.handleEmit}>
              Check in
            </a>
          </div>
        </Card>
      </>
    )
  }
}

export default Parents
