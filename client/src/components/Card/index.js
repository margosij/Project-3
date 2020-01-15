import React from 'react'

function Card(props) {
  return (
    <div className='card container animated fadeInUpBig'>{props.children}</div>
  )
}
export default Card
