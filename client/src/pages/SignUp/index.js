import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Container from '../../components/Container'
import Col from '../../components/Col'
import Row from '../../components/Row'
import API from '../../utils/Api'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authActions'

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      id: '',
      password: '',
      errors: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push('/dashboard')
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({ errors: nextProps.errors })
  //   }
  // }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    console.log('submit hit')
    const newUser = {
      username: this.state.username,
      id: this.state.id,
      password: this.state.password,
      errors: {}
    }

    this.props.registerUser(newUser)
  }

  render() {
    const { errors } = this.state
    

    return (
      <div>
        <div className='mt-4'>
          <h2>Dismissed!</h2>
        </div>
        <form onSubmit={() => this.handleSubmit}>
          <Container className='mt-3 px-5'>
            <Row className='form-group'>
              <Col size='12'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='email'
                  name='username'
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </Col>
            </Row>
            <Row className='form-group'>
              <Col size='12'>
                <input
                  className='form-control'
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </Col>
            </Row>
            <Row className='form-group'>
              <Col size='12'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='School ID Code'
                  name='id'
                  value={this.state.id}
                  onChange={this.onChange}
                />
              </Col>
            </Row>
            <button className='btn btn-success' type='submit'>
              Submit
            </button>
          </Container>
          <Container className='mt-4'>
            {/* <h3>Hello {this.state.username}!</h3> */}
            <p>
              I probably shouldn't tell you this, but your password is
              {/* {this.state.password}! */}
            </p>
          </Container>
        </form>
      </div>
    )
  }
}
Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})
export default connect(null, { registerUser })(Signup)
