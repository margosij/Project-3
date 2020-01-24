import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const composeEnhancer =
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose
const initialState = {}

const middleware = [thunk]

const store = createStore(
  () => [],
  {},
  compose(applyMiddleware(...middleware))
)
export default store
