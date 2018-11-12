import axios from 'axios';
import * as types from './actionTypes';
import config from '../../config/serverConfig';

// simple get method
// var headers = {
//   'Content-Type': 'application/json',
// }

export const getContactDetails = ({
    commit
  }) => axios.get(`${config.HOST}/contact`)
  .then(response => {
    if (response.status == 200) {
      commit(types.CONTACT_DETAILS, response.data)

    }
  })

export const submitLogin = ({
    commit
  }, data) => axios.post(`${config.HOST}/login`, data)
  .then(response => {
    if (response.status === 200) {
      commit(types.LOGIN_SUCCESS, 'success')
      return response
    }
  })

