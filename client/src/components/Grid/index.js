import React from 'react'

export function Container(props) {
  return <div className='container-fluid'>{props.children}</div>
}

export function Column(props) {
  return <div className='col'>{props.children}</div>
}

export function Row(props) {

  return <div className={`row ${props.styling} `}>{props.children}</div>
}
