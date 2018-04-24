import axios from 'axios';

const URL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

export const loginUser = (email, password, redirect) => {
  return dispatch => {
    dispatch({ type: 'LOADING' });
    axios.post(`${URL}/login`, { email, password })
    .then(response => {
      dispatch({ type: 'USER_AUTHENTICATED', payload: response.data });
      console.log('success');
      redirect();
    })
    .catch(err => {
      dispatch({ type: 'AUTHENTICATION_ERROR', payload: err })
      console.log('failure: ', err);

    });
  }
}

export const registerUser = (name, email, password, redirect) => {
  return dispatch => {
    dispatch({ type: 'LOADING' });
    axios.post(`${URL}/register`, { name, email, password })
    .then(response => {
      dispatch({ type: 'USER_AUTHENTICATED', payload: response.data });
      console.log('success');
      redirect();
    })
    .catch(err => {
      dispatch({ type: 'AUTHENTICATION_ERROR', payload: err })
      console.log('failure: ', err);

    });
  }
}

