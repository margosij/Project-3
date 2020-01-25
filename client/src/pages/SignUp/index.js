import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Container, Row, Column } from '../../components/Grid'
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
      password2: '',
      errors: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

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
      password2: this.state.password2
    }
    console.log(newUser) 
    this.props.registerUser(newUser, this.props.history)
  }

  render() {
    const { errors } = this.state
    

    return (
      <div>
        <div className='mt-4'>
          <h2>Dismissed!</h2>
        </div>
        <form noValidate onSubmit={() => this.handleSubmit}>
          {/* User Name */}
          <Container className='mt-3 px-5'>
            <Row className='form-group'>
              <Column size='12'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='email'
                  name='username'
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </Column>
            </Row>
              {/* Password */}
            <Row className='form-group'>
              <Column size='12'>
                <input
                  className='form-control'
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </Column>
            </Row>
            {/* Password 2 */}
            <Row className='form-group'>
              <Column size='12'>
                <input
                  className='form-control'
                  type='password'
                  placeholder='password must match'
                  name='password2'
                  value={this.state.password2}
                  onChange={this.onChange}
                />
              </Column>
            </Row>
            <Row className='form-group'>
              <Column size='12'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='School ID Code'
                  name='id'
                  value={this.state.id}
                  onChange={this.onChange}
                />
              </Column>
            </Row>
            <button className='btn btn-success' type='submit'>
              Submit
            </button>
          </Container>
          <Container className='mt-4'>
            <h3>Hello {this.state.username}!</h3>
            <p>
              I probably shouldn't tell you this, but your password is
              {this.state.password}!
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
export default connect(mapStateToProps, { registerUser })(withRouter(Signup))
