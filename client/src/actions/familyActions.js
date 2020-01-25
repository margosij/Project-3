import axios from 'axios';

import {
  GET_FAMILY,
  GET_FAMILIES,
  FAMILY_LOADING,
  CLEAR_CURRENT_FAMILY,
  GET_ERRORS,
  SET_CURRENT_USER
} from './types';

// Get current family
export const getCurrentFamily = () => dispatch => {
  // dispatch(setFamilyLoading());
  axios
    .get('/api/family')
    .then(res =>
      dispatch({
        type: GET_FAMILY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FAMILY,
        payload: {}
      })
    );
};

// Get family by handle
export const getFamilyById = id => dispatch => {
  // dispatch(setFamilyLoading());
  axios
    .get(`/api/family/handle/${id}`)
    .then(res =>
      dispatch({
        type: GET_FAMILY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FAMILY,
        payload: null
      })
    );
};

// Create family
export const createFamily = (familyData, history) => dispatch => {
  axios
    .post('/api/family', familyData)
    .then(res => history.push('/family'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete account & family
export const deleteAccount = () => dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    axios
      .delete('/api/family')
      .then(res =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {}
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};

// family loading
export const setProfileLoading = () => {
  return {
    type: FAMILY_LOADING
  };
};

// Clear family
export const clearCurrentFamily = () => {
  return {
    // type: CLEAR_CURRENT_PROFILE
  };
};
