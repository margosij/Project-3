import {
  GET_FAMILY,
  GET_FAMILIES,
  FAMILY_LOADING,
  CLEAR_CURRENT_FAMILY,
} from '../actions/types'

const initialState = {
  family: null,
  families: null,
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FAMILY_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_FAMILY:
      return {
        ...state,
        family: action.payload,
        loading: false
      }
    case GET_FAMILIES:
      return {
        ...state,
        families: action.payload,
        loading: false
      }
    case CLEAR_CURRENT_FAMILY:
      return {
        ...state,
        family: null
      }
    default:
      return state
  }
}
