<template>
  <div id='app'>
    <component v-bind:is="layout"></component>
  </div>
</template>

<script>
import AppLayout from './layouts/dashboard/Application'
import SimpleLayout from './layouts/Simple'
export default {
  name: 'App',
  computed: {
    layout () {
      return this.$store.getters.layout
    }
  },
  components: {
    'app-layout': AppLayout,
    'simple-layout': SimpleLayout
    // define as many layouts you want for the application
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
label{
  float: left;
}
</style>
