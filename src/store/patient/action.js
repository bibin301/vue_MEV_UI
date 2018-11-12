import axios from 'axios';
import types from './actionTypes';
import serverConfig from './../../config/serverConfig'

export const getPatientLists = ({commit}) => {
  axios.get(serverConfig.HOST + '/getPatient')
  .then(response => {
    if (response.status == 200) {
      commit(types.GET_PATIENT_LIST_SUCCESS, response.data)
    }
  })
}
export const addPatient = ({commit}, patient) => {
	axios.post(serverConfig.HOST + '/addPatient', patient)
  .then(response => {
    if (response.status == 200) {
      commit(types.GET_PATIENT_LIST_SUCCESS, response.data)
      getPatientLists({commit});
    }
  })
}
export const updatePatient = ({commit}, updatedPatient) => {
  axios.post(serverConfig.HOST + '/updatePatient',
    { 
      _id: updatedPatient._id,
      updatedPatient
    })
  .then(response => {
    if (response.status == 200) {
      commit(types.GET_PATIENT_LIST_SUCCESS, response.data)
      getPatientLists({commit});
    }
  })
}