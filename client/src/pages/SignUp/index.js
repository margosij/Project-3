import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Container, Row, Column } from '../../components/Grid'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authActions'
import classnames from 'classnames'
class Signup extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      id: '',
      password: '',
      password2: '',
      family_id: '',
      errors: '', 
      admin:'false'
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dismissal')
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
      id: this.state.family_id,
      password: this.state.password,
      password2: this.state.password2,
      family_id: this.state.family_id
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
                  className={classnames('form-control', {
                    invalid: errors.username
                  })}
                  type='text'
                  placeholder='email'
                  name='username'
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <span className='invalid-feedback'>{errors.username}</span>
              </Column>
            </Row>
            {/* Password */}
            <Row>
              <Column size='12'>
                <input
                  className={classnames('form-control', {
                    invalid: errors.password
                  })}
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <span className='invalid-feedback'>{errors.password}</span>
              </Column>
            </Row>
            {/* Password 2 */}
            <Row className='form-group'>
              <Column size='12'>
                <input
                  className={classnames('form-control', {
                    invalid: errors.password2
                  })}
                  type='password'
                  placeholder='password must match'
                  name='password2'
                  value={this.state.password2}
                  onChange={this.onChange}
                />
                <span className='invalid-feedback'>{errors.password2}</span>
              </Column>
            </Row>
            {/* Family Id Code */}
            <Row className='form-group'>
              <Column size='12'>
                <input
                  className={classnames('family-control', {
                    invalid: errors.family_id
                  })}
                  type='text'
                  placeholder='Family ID Code'
                  name='family_id'
                  value={this.state.family_id}
                  onChange={this.onChange}
                /><span className='invalid-feedback'>{errors.family_id}</span>
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
