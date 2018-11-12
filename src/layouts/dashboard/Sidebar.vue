<style scoped>
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
</style>
<template>
    <Menu active-name="2-2" theme="dark" width="auto" :open-names="['1']">
        <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>
            Dashboard
        </MenuItem>
        <Submenu name="2">
            <template slot="title" >
                <Icon type="ios-keypad"></Icon>
                Administration
            </template>
            
            <!-- <MenuItem name="2-1"> <router-link to="Modality"  @click.stop="onClick()" >Modality</router-link> </MenuItem> -->
           <router-link :to="{path: 'Modality'}">
                <MenuItem name="2-1"  @click.native="onModality">Modality</MenuItem>
            </router-link>
          
            <router-link :to="{path: 'Clinic'}">
                <MenuItem name="2-2"  @click.native="onClinic">Clinic</MenuItem>
            </router-link>

             <router-link :to="{path: 'Provider'}">
                <MenuItem name="2-3" @click.native="onProvider">Provider</MenuItem>
            </router-link>
            <router-link :to="{path: 'Room'}">
                <MenuItem name="2-4" @click.native="onRoom">Room</MenuItem>
            </router-link>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                Scheduling
            </template>
          
              <router-link :to="{path: 'ScheduleView'}">
                <MenuItem name="2-2" @click.native="onSchedule"> Schedule</MenuItem>
            </router-link>
          
        </Submenu>
        <router-link :to="{path: 'patient'}">
            <MenuItem name="4" @click.native="onPatient">
                <Icon type="ios-navigate"></Icon>
                    Patient 
            </MenuItem>
        </router-link>
        <MenuItem name="5">
            <Icon type="ios-navigate"></Icon>
                Appointment 
        </MenuItem>
    </Menu>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    onModality() {
      this.$store.dispatch("getModelityLists");
    },
    onProvider() {
      this.$store.dispatch("getProviderLists");
    },
    onClinic(name) {
      this.$store.dispatch("getClinicLists");
      return name;
    },
    onRoom(name) {
      this.$store.dispatch("getRoomLists");
      return name;
    },
    onPatient(name) {
      this.$store.dispatch("getPatientLists");
      return name;
    },
    onSchedule(){
         this.$store.dispatch("getScheduleViewLists");
    }

  }
};
</script>
