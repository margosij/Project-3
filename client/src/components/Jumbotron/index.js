import React from 'react'
import './style.css'

const Jumbotron = ({ children, title, lead, styling }) => {
  return (
    <div className={`jumbotron text-light my-3 d-none d-sm-block ${styling}`}>
      <div className='text-center'>
        <h1 className='display-3 display-md-4'>{title}</h1>
        <h2 className='display-5 display-md-6'>{lead}</h2>
      </div>
      {children}
    </div>
  )
}

export default Jumbotron
