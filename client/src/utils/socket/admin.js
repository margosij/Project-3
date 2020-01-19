import React, { Component } from 'react'
import Card from '../../components/Card'
import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:3001')

class Admin extends Component {
  state = {
    adminId: 'Joe Clark',
    timestamp: new Date().toTimeString()
  }

  componentDidMount() {
    this.handleLoadEmit('adminTime', this.state.timestamp )
    this.handleLoadEmit('adminID', this.state.adminId )
    this.setState({ adminId: 'Joe Clark' })
  }

  handleEmit = function(method, data) {
    console.log('data:', data)
    console.log('method:', method)
    socket.emit(method, { message: data })
  }
  handleLoadEmit = function(method, data) {
    console.log('data:', data)
    console.log('method:', method)
    if (data !== undefined) {
      socket.emit(method, { message: data })
    }
  }
  render() {
    socket.on('hello', (data) => console.log(data.message))
    return (
      <>
        <Card>
          <div className='card-body'>
            <h5 className='card-title'>Socket Emitter Test Admin</h5>
            <p className='card-text'>
              {this.state.adminId} is signed in. This is the timer value:{' '}
              {this.state.timestamp}
            </p>
            <button
              className='btn btn-primary'
              onClick={() => this.handleEmit('adminGreet', 'i hate you all')}
            >
              I hate my job
            </button>
          </div>
        </Card>
      </>
    )
  }
}

export default Admin
