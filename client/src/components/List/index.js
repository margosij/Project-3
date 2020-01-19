import React from 'react'

const List = ({ children }) => {
  return <ul className='list-unstyled col-8 mx-auto'>{children}</ul>
}

const ListItem = ({ children }) => {
  return <li className='list-group-item'>{children}</li>
}

export {List, ListItem} 