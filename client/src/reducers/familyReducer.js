import {
  GET_FAMILY,
  GET_FAMILIES,
  FAMILY_LOADING,
  CLEAR_CURRENT_FAMILY,
  ADD_FAMILY_TO_WAITLIST
} from "../actions/types";

const initialState = {
  family: null,
  families: null,
  loading: false,
  waitlist: []
};

export default (state = initialState, action) => {
  // console.log("action:", action.payload);
  switch (action.type) {
    case FAMILY_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_FAMILY:
      return {
        ...state,
        family: action.payload,
        loading: false
      };
    case GET_FAMILIES:
      return {
        ...state,
        families: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_FAMILY:
      return {
        ...state,
        family: null
      };
    case ADD_FAMILY_TO_WAITLIST:
      return {
        ...state,
        waitlist: state.waitlist.includes(action.payload)
          ? state.waitlist
          : [...state.waitlist, action.payload]
      };
    default:
      return state;
  }
};
