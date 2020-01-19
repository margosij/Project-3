import React from 'react'
import './jumbotron.css'

const Jumbotron = ({ children, title, lead }) => {
  return (
    <div className='jumbotron jumbotron-fluid text-light '>
      <div className='container text-center'>
        <h1 className='display-3'>{title}</h1>
        <h2 className='display-5 display-md-6'>{lead}</h2>
      </div>
      {children}
    </div>
  )
}

export default Jumbotron
