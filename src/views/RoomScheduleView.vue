<template>

 
    <div class="row">
      <div class="col-md-12">
        <div class="add-button">
        <b-button  size="sm" variant="primary" v-b-modal.modalPrevent >Add</b-button>
      </div>
        
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>RoomId</th>
              <th>Date </th>
              <th>Scheduled Time</th>
              <th>Action</th>
           
            </tr>
          </thead>
          <tbody>
              <tr v-for="(schedule, index) in viewScheduleList" v-bind:key="index">
             
                  <td>{{ schedule.room_id }} </td>
                  <td> {{ schedule.date_sch }}</td>
                  <td>{{ schedule.start_time }} - {{ schedule.end_time }} </td>
                   <td>  <b-button size="sm" variant="primary">Edit</b-button></td>
              </tr>
            </tbody>
        </table>
       
      </div>
       <b-modal id="modalPrevent"
             ref="modal"
             title="Schedule"
             hide-footer
           >

      <form >
    

        <b-form-group id="exampleInputGroup1"
                    label="Modality"
                    label-for="exampleInput2">
        <!-- <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.roomId"
                      required
                      placeholder="Room Id">
        </b-form-input> -->
        <b-form-select v-model="form.roomId" :options="options" class="mb-3">
    </b-form-select>

      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Date"
                    label-for="exampleInput1"
                   >
        <b-form-input id="exampleInput1"
                      type="date"
                      v-model="form.date"
                      required
                      placeholder="Date">
        </b-form-input>
      </b-form-group>
   

    <b-form-group id="exampleInputGroup1"
                    label="Start Time"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="time"
                      v-model="form.startTime"
                      required
                      placeholder="startTime">
        </b-form-input>
      </b-form-group>

        <b-form-group id="exampleInputGroup1"
                    label="End Time"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="time"
                      v-model="form.endTime"
                      required
                      placeholder="endTime">
        </b-form-input>
      </b-form-group>
       <b-button type="submit" variant="primary">Submit</b-button>

      </form>

    </b-modal>
      
    </div>

    


</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "RoomScheduleView",
  data() {
    return {
      form:{
        roomId:"",
        date:"",
        startTime:"",
        endTime:""
      },
       options: [
        { value: null, text: 'Please select some item' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Default Selected Option' },
        { value: 'c', text: 'This is another option' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ]
     
    };
  },

  computed: {
    ...mapGetters({
      viewScheduleList: "viewScheduleList" // for get data
    })
  },

  methods: {
   addSchedule(){
     alert("ok")
   }
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-button {
  margin-bottom: 10px;
  float: right;
}
label{
      float: left;
}
</style>
