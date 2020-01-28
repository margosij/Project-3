import React, { Component } from 'react'
import { Container, Row, Column } from '../../components/Grid'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/authActions'
import { withRouter } from 'react-router-dom'
// packages allows conditionals in classNames
import classnames from 'classnames'
class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      user: {},
      errors: {}
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
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dismissal')
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  // when submit button is clicked
  onSubmit(e) {
    console.log('submit hit')
    e.preventDefault()

    const userData = {
      username: this.state.username,
      password: this.state.password
    }
    console.log('UserData', userData)
    this.props.loginUser(userData)
  }
  render() {
    const { errors } = this.state
    console.log('errors', errors)
    return (
      <>
        <div className='container'>
          <div className='mt-4 mx-3'>
            <h2>Dismissed!</h2>
          </div>
          <form onSubmit={this.onSubmit}>
            <Container className='mt-3 px-5'>
              <label for='username'>Username:</label>
              <div className='form-group'>
                <input
                  className={classnames('form-control', {
                    'is-invalid': errors.username
                  })}
                  type='text'
                  placeholder='Username'
                  name='username'
                  onChange={this.onChange}
                  id='username'
                />
                {errors.username && <div className='invalid-feedback'>{errors.username}</div>}
              </div>
              <label>Password:</label>
              <div className='form-group'>
                <input
                  className={classnames('form-control', {
                    'is-invalid': errors.password
                  })}
                  type='password'
                  placeholder='Password'
                  name='password'
                  onChange={this.onChange}
                />
                {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
              </div>
              <button className='btn btn-success my-2' type='submit'>
                Submit
              </button>
            </Container>
          </form>
        </div>
      </>
    )
  }
}
// defining proptypes
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}
// mapping global state to local state
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(withRouter(Login))
