import React, { useState } from 'react'
import { Container, Row, Column } from '../../components/Grid'
import API from '../../utils/Api'
const Login = () => {
  const [username, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [responseErrors, setResponseErrors] = useState({})

  const handleSubmit = async e => {
    console.log('Login button hit')
    e.preventDefault()
    API.login({ username, password })
      .then(res => {
        console.log(res)
        if (res) {
          alert(res)
        } else {
          window.location = '/'
        }
      })
      .catch(ex => {
        // setResponseErrors(response.data)
        console.log(ex)
      })
    
  }
  return (
    <div>
      <div className='mt-4'>
        <h2>Dismissed!</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className='mt-3 px-5'>
          <Row className='form-group'>
            <Column size='12'>
              <input
                className='form-control'
                type='text'
                placeholder='username'
                name='username'
                onChange={e => setEmail(e.target.value)}
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
                onChange={e => setPassword(e.target.value)}
              />
            </Column>
          </Row>
          <button
            className='btn btn-success'
            type='submit'
            onClick={() => handleSubmit}
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
  )
}

export default Login
