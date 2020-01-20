import React from 'react'

const CardHeader = props => {
  return (
    <>
      <div className='card-header text-center'>
        <h4>{props.title}</h4>
      </div>
    </>
  )
}

export default CardHeader
