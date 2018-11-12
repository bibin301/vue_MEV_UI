import * as types from './actionTypes';
import * as actions from './action';

// initial state
const state = {
  layout: 'simple-layout'
}

// getters
const getters = {
  layout: state => state.layout, // for get
}

// mutations
const mutations = {
  //STO get
  [types.LAYOUT_SWAP](state, data, message) {
    state.layout = data;
  },
}

export default {
  state,
  actions,
  getters,
  mutations
}
