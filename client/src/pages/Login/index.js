import React, { Component } from 'react'
import { Container, Row, Column } from '../../components/Grid'
import { Redirect } from 'react-router-dom'
import API from '../../utils/Api'

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
      {this.state.path ? (
        <Redirect to={{ pathname: this.state.path }} />
        ) : (
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
              {/* <Container className="mt-4">
            <h3>Hello {email}!</h3>
            <p>I probably shouldn't tell you this, but your password is {password}!</p>
          </Container> */}
            </form>
          </div>
        </>
      )}
    </>
  )
}
}

export default Login
