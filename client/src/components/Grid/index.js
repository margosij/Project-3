import React from 'react'

export const Container = props => {
  return <div className={`container-fluid ${props.styling}`}>{props.children}</div>
}

export const Column = props => {
  return <div className={`col ${props.styling}`} >{props.children}</div>
}

export const Row = props => {
  return <div className={`row ${props.styling} `}>{props.children}</div>
}
