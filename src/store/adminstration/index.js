import types from './actionTypes';
import * as actions from './action';
const state = {
  clinicLists: [],
  roomLists: [],
  viewScheduleList: [],
  modelityLists: [],
  providerList: [],
}

const getters = {
  clinicLists: state => state.clinicLists,
  roomLists: state => state.roomLists,
  modelityLists: state => state.modelityLists,
  modelitySuccess: state => state.modelitySuccess,
  modilityUpdateSuccess: state => state.modilityUpdateSuccess,
  providerList: state => state.providerList,
  providerUpdateSuccess: state => state.providerUpdateSuccess,
  viewScheduleList: state => state.viewScheduleList
}

const mutations = {
  [types.GET_CLINIC_LIST_SUCCESS](state, data, msg) {
    state.clinicLists = data
  },
  [types.GET_MODELITY_LIST_SUCCESS](state, data, msg) {
    state.modelityLists = data
  },
  [types.MODELITY_SAVE_SUCCESS](state, data, msg) {
    state.modelitySuccess = data
  },
  [types.MODELITY_UPDATE_SUCCESS](state, data, msg) {
    state.modilityUpdateSuccess = data
  },
  [types.PROVIDER_LIST_SUCCESS](state, data, msg) {
    state.providerList = data
  },
  [types.PROVIDER_UPDATED_SUCCESS](state, data, msg) {
    state.providerUpdateSuccess = data
  },
  [types.GET_ROOM_LIST_SUCCESS](state, data, msg) {
    state.roomLists = data
  },
  [types.VIEW_SCHEDULE_LIST](state, data, msg) {
    state.viewScheduleList = data
  },
}

export default {
  state,
  actions,
  getters,
  mutations

}
