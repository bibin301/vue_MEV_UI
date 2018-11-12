<template>
     <div class="row">
      <div class="col-md-12">
        <div class="add-button">
        <b-button  size="sm" variant="primary" v-b-modal.modalPrevent>Add</b-button>
      </div>
        
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>City </th>
              <th>State</th>
              <th>Country </th>
              <th>Ph No </th>
             <th>PinCode</th>
             <th>Provider Type</th>
             <th>Active</th>
             <th>Action</th> 
            </tr>
          </thead>
          <tbody>
              <tr v-for="(provider, index) in providerList" v-bind:key="index">
             
                  <td>{{ provider.first_name  }} </td>
                  <td> {{ provider.last_name }}</td>
                  <td>{{ provider.city  }} </td>
                  <td>{{ provider.state  }} </td>
                  <td>{{ provider.country  }} </td>
                  <td>{{ provider.pin_code  }} </td>
                  <td>{{ provider.phone_no  }} </td>
                  <td>{{ provider.Provider_type  }} </td>
                  <td>
                  
                    <label class="switch">
                         <input type="checkbox" @click="getActive(provider)"  :checked="provider.is_active">
                        <span class="slider round"></span>
                    </label>
                  
                   </td>
                  <td>  
                    <b-button  size="sm" variant="primary" @click="EditModel(provider)">Modify</b-button>
                  </td> 
              </tr>
            </tbody>
        </table>
       
      </div>
       <b-modal id="modalPrevent"
             ref="modal"
             title="Provider"
             hide-footer
           >
      <form @submit="onSubmit">

        <b-form-group id="exampleInputGroup1"
                    label="firstName"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.firstName"
                      
                      placeholder=" firstName">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="lastName"
                    label-for="exampleInput1"
                   >
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="form.lastName"
                      
                      placeholder="lastName">
        </b-form-input>
      </b-form-group>

       <b-form-group id="exampleInputGroup1"
                    label="city"
                    label-for="exampleInput2">
      <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.city"
                      
                      placeholder="city">
        </b-form-input>
      </b-form-group>

       <b-form-group id="exampleInputGroup1"
                    label="state"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.state"
                      
                      placeholder="state">
        </b-form-input>
      </b-form-group>

       <b-form-group id="exampleInputGroup1"
                    label="country"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.country"
                      
                      placeholder="country">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup1"
                    label="phoneNumber"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.phoneNumber"
                      
                      placeholder="phoneNumber">
        </b-form-input>
      </b-form-group>

       <b-form-group id="exampleInputGroup1"
                    label="PinCode"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.PinCode"
                      
                      placeholder="PinCode">
        </b-form-input>
      </b-form-group>
           <v-switch :label="`active`" color="blue" v-model="form.active"></v-switch>
           <b-button type="submit" variant="primary">Submit</b-button>

      </form>
    </b-modal>
    
     <div>
    
        <b-modal v-model="modalShow"  hide-footer>
               Would You like to active or inactive provider
            <div>

            <b-button type="submit" @click="cancelModel()" variant="primary">Cancel</b-button>
            <b-button type="submit" @click="submitActive()" variant="primary">Confirm</b-button>
            </div>
        </b-modal>
      </div>
    

    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Provider",
  data() {
    return {
      form: {
        id: "",
        firstName: "",
        lastName: "",
        city: "",
        state: "",
        country: "",
        phoneNumber: "",
        PinCode: "",
        ProviderType: "",
        active: ""
      },
      modalShow: false,
      names: [],
      modelity: [],
      modelData: ""
    };
  },

  computed: {
    ...mapGetters({
      providerList: "providerList" // for get data
    })
  },

  methods: {
    clearFields() {
      this.form.firstName = "";
      this.form.lastName = "";
      this.form.city = "";
      this.form.state = "";
      this.form.country = "";
      this.form.phoneNumber = "";
      this.form.PinCode = "";
      this.form.ProviderType = "";
      this.form.active = "";
    },
    onSubmit(evt) {
      evt.preventDefault();
      if (this.form.id) {
        const formValues = {
          updatedProvider: {
            _id: this.form.id,
            first_name: this.form.firstName,
            last_name: this.form.lastName,
            city: this.form.city,
            state: this.form.state,
            country: this.form.country,
            phone_no: this.form.phoneNumber,
            pin_code: this.form.PinCode,
            Provider_type: this.form.ProviderType,
            is_active: this.form.active
          }
        };

        this.$store.dispatch("updateProvider", formValues);
        this.clearFields();
        this.$refs.modal.hide();
      } else {
        const formValues = {
          first_name: this.form.firstName,
          last_name: this.form.lastName,
          city: this.form.city,
          state: this.form.state,
          country: this.form.country,
          phone_no: this.form.phoneNumber,
          pin_code: this.form.PinCode,
          Provider_type: this.form.ProviderType,
          is_active: this.form.active
        };

        this.$store.dispatch("saveProvider", formValues);
        this.$refs.modal.hide();
        this.clearFields();
      }
    },

    EditModel(evt) {
      this.form.id = evt._id;
      this.form.firstName = evt.first_name;
      this.form.lastName = evt.last_name;
      this.form.city = evt.city;
      this.form.state = evt.state;
      this.form.country = evt.country;
      this.form.phoneNumber = evt.phone_no;
      this.form.PinCode = evt.pin_code;
      this.form.ProviderType = evt.Provider_type;
      this.form.active = evt.is_active;
      this.$refs.modal.show();
    },

    getActive(data) {
      this.modalShow = true;
      this.modelData = data;
    },
    cancelModel() {
      this.modalShow = false;
    },
    submitActive() {
      const { _id, is_active } = this.modelData;
      this.$store.dispatch("updateProvider", {
        updatedProvider: { _id, is_active: !is_active }
      });
      this.modalShow = false;
    }
  }
};
</script>

<style scoped>
.add-button {
  margin-bottom: 10px;
  float: right;
}
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
