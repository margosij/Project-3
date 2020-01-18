import Card from '../../components/Card'
import React, { Component } from 'react'
import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:3001')

class Admin extends Component {
  state = {
    adminId: 'Joe Clark',
    timestamp: Date.now()
  }

  componentDidMount() {
    socket.emit('arrived', { time: this.state.timestamp })
    socket.emit('arrived', { adminId: this.state.adminId })
  }

  handleEmit = function () {
    console.log(this.state.adminId)
    socket.emit('arrived', this.state.adminId)
  }
  render() {
    return (
      <>
        <Card>
          <div className='card-body'>
            <h5 className='card-title'>Socket Emitter Test</h5>
            <p className='card-text'>
              With supporting text below as a natural lead-in to additional
              content.
            This is the timer value: {this.state.timestamp}
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

export default Admin
