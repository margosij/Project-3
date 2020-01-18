import react, { Component } from 'React'
import socketIOClient from 'socket.io-client'

class Admin extends Component {
  state = {
    arrived: 'false',
    endpoint: 'localhost:4001',
    wait: 'false',
    come: 'drive',
    parentsWaiting: []
  }
  componentDidMount = () => {
    const socket = socketIOClient(this.state.endpoint)
    setInterval(this.send(), 1000)
    socket.on('Parent such and such is here', status => {
      this.setState({ status: status })
      console.log(this.state.parentsWaiting)
    })
  }

  send = () => {
    socket.emit(`familyID ${this.state.familyId} is here`)
  }

  render() {
    const socket = socketIOClient(this.state.endpoint)
    return (
      <div className='card'>{`familyID ${this.state.familyId} is here`}</div>
    )
  }
}

export default Admin
