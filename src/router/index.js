import Vue from 'vue';
import Router from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Login from '@/views/Login';
import Dashboard from '@/views/Dashboard';
import Clinic from './../views/Clinic';
import Provider from './../views/Provider';
import Room from './../views/Room';
import Modality from './../views/Modality';
import RoomSchedulerView from './../views/RoomScheduleView';
import Patient from './../views/Patient';

Vue.use(Router);
Vue.use(BootstrapVue);

export default new Router({
  routes: [{
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    }, {
      path: '/Modality',
      name: 'Modality',
      component: Modality
    },
    {
      path: '/Clinic',
      name: 'Clinic',
      component: Clinic
    },
    {
      path: '/Provider',
      name: 'Provider',
      component: Provider
    }, {
      path: '/Room',
      name: 'Room',
      component: Room
    },
    {
      path: '/ScheduleView',
      name: 'RoomSchedulerView',
      component: RoomSchedulerView
    },
    {
      path: '/Patient',
      name: 'Patient',
      component: Patient
    },

  ]
})
