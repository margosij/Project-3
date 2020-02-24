import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
const initialState = {}
// thunk is a middle ware that makes calls asynchronous
const middleware = [thunk]
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)
    // this is for the Redux devtools Chrome Extension
  )
)

export default store
