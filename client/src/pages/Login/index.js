import React, { Component } from 'react'
import { Container, Row, Column } from '../../components/Grid'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { loginUser} from '../../actions/authActions'
class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      user: {},
      path: '/'
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      // this.props.history.push(this.state.path)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      // this.props.history.push(this.state.path)
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  // handleSubmit = async e => {
  //   console.log('Login button hit')
  //   e.preventDefault()
  //   API.login(this.state.username, this.state.password)
  //     // .then(res => {
  //     //   console.log(res)
  //     //   if (res) {
  //     //     alert(res)
  //     //   } else {
  //     //     window.location = '/'
  //     //   }
  //     // })
  //     .then(response => {
  //       console.log('login response: ', response)
  //       if (response.status === 200) {
  //         this.setState({
  //           isAuthenticated: true,
  //           user: response.data.username,
  //           path: '/'
  //         })
  //       }
  //     })
  //     .catch(ex => {
  //       // setResponseErrors(response.data)
  //       console.log(ex)
  //     })
  // }
  
  onSubmit(e) {
    e.preventDefault()
    console.log('submit hit')

    const userData = {
      username: this.state.username,
      password: this.state.password
    }

     this.props.loginUser(userData)
  }
  render() {
    const { errors } = this.state
    return (
      <>
        <div className='container'>
          <div className='mt-4'>
            <h2>Dismissed!</h2>
          </div>
          <form onSubmit={this.onSubmit}>
            <Container className='mt-3 px-5'>
              <Row className='form-group'>
                <Column size='12'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='username'
                    name='username'
                    onChange={this.onChange}
                    // error={errors.username}
                  />
                </Column>
              </Row>
              <Row className='form-group'>
                <Column size='12'>
                  <input
                    className='form-control'
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={this.onChange}
                    // error={errors.password}
                  />
                </Column>
              </Row>
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
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(Login)
