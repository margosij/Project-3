import React from 'react'

function Card(props) {
  return (
    <div className='card container animated fadeInUpBig my-2'>{props.children}</div>
  )
}
export default Card
