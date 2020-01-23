import React, { useState } from 'react'
import Container from '../../components/Container'
import Col from '../../components/Col'
import Row from '../../components/Row'
import API from '../../utils/Api'

const Signup = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [id, setId] = useState()

  // useEffect(() => {
  // }, [search]);

  const handleSubmit = async e => {
    console.log('sign up button hit')
    e.preventDefault()
      
      !(email || password || id)
      ? alert('All fields required')
      : API.saveAUser({ email, password, id })
          .then(result => {
            console.log(result)
          })
          .catch(err => {
            console.log(err.response.data)
            if (err.response) {
              alert(err.response.data.message)
            }
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
            <Col size='12'>
              <input
                className='form-control'
                type='text'
                placeholder='email'
                name='email'
                onChange={e => setEmail(e.target.value)}
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
                onChange={e => setPassword(e.target.value)}
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
                onChange={e => setId(e.target.value)}
              />
            </Col>
          </Row>
          <button className='btn btn-success' type='submit'>
            Submit
          </button>
        </Container>
        <Container className='mt-4'>
          <h3>Hello {email}!</h3>
          <p>
            I probably shouldn't tell you this, but your password is {password}!
          </p>
        </Container>
      </form>
    </div>
  )
}

export default Signup
