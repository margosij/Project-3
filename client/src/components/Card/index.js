import React from 'react'

const Card = (props) => {
  return (
    <div className='card container animated fadeInUpBig my-2'>{props.children}</div>
  )
}
export default Card
