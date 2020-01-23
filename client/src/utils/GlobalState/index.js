import React, { createContext, useReducer, useContext } from 'react'
const GlobalState = createContext()

export class Provider extends Component {
  state = {
    authenticated: false,
    admin: false,
    parent: false
  }

  render() {
    return (
      <GlobalState.Provider value={this.state}>
        {this.props.children}
      </GlobalState.Provider>
    )
   }
} 