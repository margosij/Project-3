import React, { createContext, useReducer, useContext } from 'react'

const ArrivalsContext = createContext({
  // parents checked in and waiting
  waiting: []
}) 

const { Provider } = ArrivalsContext

export default ArrivalsContext