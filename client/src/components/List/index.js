import React from 'react'

export const List = ({ children }) => {
  return <ul className='list-unstyled col-8 mx-auto'>{children}</ul>
}

export const ListItem = ({ children }) => {
  return <li className='list-group-item'>{children}</li>
}
