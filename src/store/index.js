'use strict'

import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'

import login from './login';
import common from './common';
import adminstration from './adminstration';
import patient from './patient';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: sessionStorage,
  reducer: state => ({
    common: state.common
  })
})

const store = new Vuex.Store({
  modules: {
    login,
    common,
    adminstration,
    patient
  },
  plugins: [vuexLocal.plugin]
})

export default store