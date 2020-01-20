import React from 'react'

const Card = (props) => {
  return (
    <div className={`card animated fadeInUpBig ${props.styling}`}>{props.children}</div>
  )
}
export default Card
