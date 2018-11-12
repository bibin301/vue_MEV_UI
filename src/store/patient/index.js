import types from './actionTypes';
import * as actions from './action';
const state = {
  patientLists: [],
}

const getters = {
  patientLists: state => state.patientLists,
}

const mutations = {
  [types.GET_PATIENT_LIST_SUCCESS](state, data, msg) {
    state.patientLists = data
  },
}

export default {
  state,
  actions,
  getters,
  mutations
}
