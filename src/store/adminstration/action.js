import axios from 'axios';
import types from './actionTypes';
import serverConfig from './../../config/serverConfig'

export const getModelityLists = ({
  commit
}) => {

  axios.get(serverConfig.HOST + '/modility')
    .then(response => {
      if (response.status == 200) {
        commit(types.GET_MODELITY_LIST_SUCCESS, response.data)
      }
    })
}

export const saveModelity = ({
  commit
}, data) => {

  axios.post(serverConfig.HOST + '/modility', data)
    .then(response => {
      if (response.status == 200) {
        commit(types.MODELITY_SAVE_SUCCESS, response.data)
        this.getModelityLists({
          commit
        });
      }
    })
}

export const updateModility = ({
  commit
}, data) => {

  axios.post(serverConfig.HOST + '/updateModility', data)
    .then(response => {
      if (response.status == 200) {
        commit(types.MODELITY_UPDATE_SUCCESS, response.data)
        this.getModelityLists({
          commit
        });
      }
    })
}

export const getProviderLists = ({
  commit
}) => {

  axios.get(serverConfig.HOST + '/providerList')
    .then(response => {
      if (response.status == 200) {
        commit(types.PROVIDER_LIST_SUCCESS, response.data)
      }
    })
}

export const updateProvider = ({
  commit
}, data) => {

  axios.post(serverConfig.HOST + '/updateProvider', data)
    .then(response => {
      if (response.status == 200) {
        commit(types.PROVIDER_UPDATED_SUCCESS, response.data)
        this.getProviderLists({
          commit
        });
      }
    })
}


export const saveProvider = ({
  commit
}, data) => {

  axios.post(serverConfig.HOST + '/saveProvider', data)
    .then(response => {
      if (response.status == 200) {
        commit(types.PROVIDER_UPDATED_SUCCESS, response.data)
        this.getProviderLists({
          commit
        });
      }
    })
}
export const getClinicLists = ({commit}) => {
	axios.get(serverConfig.HOST + '/getClinic')
			.then(response => {
				if (response.status == 200) {
					commit(types.GET_CLINIC_LIST_SUCCESS, response.data)
				}
			})
}
export const addClinic = ({commit}, clinic) => {
	axios.post(serverConfig.HOST + '/addClinic', clinic)
			.then(response => {
				if (response.status == 200) {
					commit(types.GET_CLINIC_LIST_SUCCESS, response.data)
					getClinicLists({commit});
				}
			})
}
export const editClinic = ({commit}, updatedClinic) => {
	axios.post(serverConfig.HOST + '/updateClinic', {_id: updatedClinic._id, updatedClinic })
			.then(response => {
				if (response.status == 200) {
					commit(types.GET_CLINIC_LIST_SUCCESS, response.data)
					getClinicLists({commit});
				}
			})
}

export const getRoomLists = ({commit}) => {
	axios.get(serverConfig.HOST + '/getRoom')
			.then(response => {
				if (response.status == 200) {
				commit(types.GET_ROOM_LIST_SUCCESS, response.data)
				}
			})
}
export const addRoom = ({commit}, room) => {
	axios.post(serverConfig.HOST + '/addRoom', room)
			.then(response => {
				if (response.status == 200) {
				commit(types.GET_ROOM_LIST_SUCCESS, response.data)
				getRoomLists({commit});
				}
			})
}
export const updateRoom = ({commit}, updatedRoom) => {
	axios.post(serverConfig.HOST + '/updateRoom', {_id: updatedRoom._id, updatedRoom })
			.then(response => {
				if (response.status == 200) {
				commit(types.GET_ROOM_LIST_SUCCESS, response.data)
				getRoomLists({commit});
				}
			})
}

export const getScheduleViewLists = ({commit}) => {
	axios.get(serverConfig.HOST + '/viewScheduleList')
			.then(response => {
				if (response.status == 200) {
				commit(types.VIEW_SCHEDULE_LIST, response.data)
				}
			})
}

