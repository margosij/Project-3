import React from 'react'

const Card = props => {
  return (
    <div className={`card animated ${props.styling} border-0`}>
      {props.children}
    </div>
  )
}
export default Card
