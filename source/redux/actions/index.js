import request from 'axios';
import {URL} from 'constants/hidden';

export const login = () => dispatch =>
request.get(`${URL}/users`).then(
  response => dispatch({
    type: 'LOGIN',
    data: response.data
  })
)

export const signup = (username, password) => dispatch =>
request.post(`${URL}/users`, {username, password}).then(
  response => dispatch({
    type: 'SIGNUP',
    data: response.data
  })
)
