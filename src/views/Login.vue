<template>
  <div>
    <b-container>

       <b-row>
        <b-col sm></b-col>
        <b-col sm>
           <b-form @submit="onSubmit" @reset="onReset" v-if="show">

       <b-form-group id="exampleInputGroup1"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Password:"
                    label-for="exampleInput1"
                   >
        <b-form-input id="exampleInput1"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Password">
        </b-form-input>
      </b-form-group>
     
      
      <b-button type="submit" variant="primary">Submit</b-button>
    
    </b-form>

        </b-col>
        <b-col sm></b-col>
    </b-row>
   
    </b-container>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Login',
  data () {
      return {
        form: {
          name: '',
          password: ''
            },
      
        show: true
      }
    },

  methods: {
    onSubmit (evt) {
      evt.preventDefault();
          
      const formValues ={
        user_name: this.form.name,
        password: this.form.password
      }

      this.$store.dispatch("submitLogin",  formValues).then(response =>{

        if(response.status === 200){
          this.$store.dispatch("setLayout",  'app-layout');
          this.$router.push({ name: 'Dashboard'})
        }
        
      })

    },
    onReset() {}
   
  },
  created() {
// onload get data - get method
      this.$store.dispatch("getContactDetails");
     
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
