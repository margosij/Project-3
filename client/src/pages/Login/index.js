import React, { Component } from 'react'
import { Container, Row, Column } from '../../components/Grid'
import { PropTypes } from 'prop-types'
import API from '../../utils/Api'
import { connect } from 'react-redux'
import { loginUser} from '../../actions/authActions'
class Login extends Component {
  state = {
    username: '',
    password: '',
    isAuthenticated: false,
    user: {},
    path: null
  }

  //   componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push('/dashboard');
  //   }
  // }

  handleSubmit = async e => {
    console.log('Login button hit')
    e.preventDefault()
    API.login(this.state.username, this.state.password)
      // .then(res => {
      //   console.log(res)
      //   if (res) {
      //     alert(res)
      //   } else {
      //     window.location = '/'
      //   }
      // })
      .then(response => {
        console.log('login response: ', response)
        if (response.status === 200) {
          this.setState({
            isAuthenticated: true,
            user: response.data.username,
            path: '/'
          })
        }
      })
      .catch(ex => {
        // setResponseErrors(response.data)
        console.log(ex)
      })
  }
  render() {
    return (
      <>
        <div className='container'>
          <div className='mt-4'>
            <h2>Dismissed!</h2>
          </div>
          <form>
            <Container className='mt-3 px-5'>
              <Row className='form-group'>
                <Column size='12'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='username'
                    name='username'
                    onChange={e => this.setState({ username: e.target.value })}
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
                    onChange={e => this.setState(e.target.value)}
                  />
                </Column>
              </Row>
              <button
                className='btn btn-success my-2'
                type='submit'
                onClick={this.handleSubmit}
              >
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
