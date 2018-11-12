import * as types from './actionTypes';
import * as actions from './action';

// initial state
const state = {
  contactInfo: [],
}

// getters
const getters = {
  contactInfo: state => state.contactInfo, // for get
}

// mutations
const mutations = {
  //STO get
  [types.CONTACT_DETAILS](state, data, message) {
    console.log(data)

    state.contactInfo = data;
  },
  [types.LOGIN_SUCCESS](state, data, message) {
    console.log(data)

    state.contactInfo = data;
  },
}

export default {
  state,
  actions,
  getters,
  mutations
}
