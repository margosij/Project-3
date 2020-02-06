import React from 'react'
import './style.css'

const Jumbotron = ({ children, title, lead, styling }) => {
  return (
    <div className={`jumbotron text-light my-3 ${styling}`}>
      <div className='container text-center'>
        <h1 className='display-3'>{title}</h1>
        <h2 className='display-5 display-md-6'>{lead}</h2>
      </div>
      {children}
    </div>
  )
}

export default Jumbotron
