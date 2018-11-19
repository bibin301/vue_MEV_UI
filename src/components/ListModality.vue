<template>
<table class="table table-bordered">
          <thead>
            <tr v-for="(header, index) in headerInfo" v-bind:key="index">
              <th>{{header.name}}</th>
              <th>{{header.code}} </th>
              <th>{{header.description}}</th>
              <th> {{header.active}} </th>
              <th>{{header.action}}</th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="(modelity, index) in modelityLists" v-bind:key="index">
                   <td>{{ modelity.name }} </td>
                  <td> {{ modelity.code }}</td>
                  <td>{{ modelity.description }} </td>
                  <td>
                     <label class="switch">
                         <input type="checkbox" @click="onSubmit(modelity)"  :checked="modelity.is_active" >
                        <span class="slider round"></span>
                    </label>
                               
                </td>
                  <td>  <b-button  size="sm" variant="primary" @click="Model(modelity)">Modify</b-button> </td>
              </tr>
            </tbody>
        </table>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  props: {
    getActive: {
      type: Function,
      required: true
    },
    modelityLists: {
      type: Array,
      required: true
    },
    EditModel:{
      type:Function,
      required:true
    }
 
  },

  data: () => {
    return {
      modalShow: false
    };
  },
  computed: {
 
  },
  methods: {
    onSubmit(data) {
      this.$props.getActive(data);
    },
    Model(data){
      this.$props.EditModel(data);
    }
  }
};
</script>

<style scoped>
</style>
