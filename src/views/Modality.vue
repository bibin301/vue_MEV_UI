<template>
     <div class="row">
      <div class="col-md-12">
        <div class="add-button">
        <b-button  size="sm" variant="primary" v-b-modal.modalPrevent>Add</b-button>
      </div>
        
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Code </th>
              <th>Description</th>
              <th> Active </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="(modelity, index) in modelityLists" v-bind:key="index">
                   <td>{{ modelity.name }} </td>
                  <td> {{ modelity.code }}</td>
                  <td>{{ modelity.description }} </td>
                  <td>
                     <label class="switch">
                         <input type="checkbox" @click="getActive(modelity)"  :checked="modelity.is_active" >
                        <span class="slider round"></span>
                    </label>
                               
                </td>
                  <td>  <b-button  size="sm" variant="primary" @click="EditModel(modelity)">Modify</b-button> </td>
              </tr>
            </tbody>
        </table>
       
      </div>
           <Edit-model
           :isVisible="editModal"
           :save="handleModlityAdd"
           :name="form.name"
           :code="form.code"
           :id="form.id"
           :isActive="form.isActive"
           :description="form.description"> </Edit-model>
      <div>
    
        <b-modal v-model="modalShow"  hide-footer>
               Would You like to active or inactive Modality
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
import EditModel from "../components/EditModel";

export default {
  name: "Modality",
  components: {
    "Edit-model": EditModel
  },
  data() {
    return {
      form: {
        name: "",
        code: "",
        description: "",
        id: "",
        isActive: ""
      },
      modalShow: false,
      editModal: false,
      names: [],
      modelity: [],
      modelData: "",
      editInfo: []
    };
  },
  updated() {
    console.log("modelityLists", this.modelityLists);
  },
  computed: {
    ...mapGetters({
      modelityLists: "modelityLists" // for get data
    })
  },

  methods: {
    clearFields() {
      this.name = "";
      this.code = "";
      this.description = "";
      this.isActive = "";
    },
    handleModlityAdd(data) {
      if (data.id) {
        const formValues = {
          updatedModility: {
            _id: data.id || "",
            name: data.name,
            code: data.code,
            description: data.description
          }
        };

        this.$store.dispatch("updateModility", formValues);
        this.clearFields();
        this.editModal = false;
      } else if (data.id == "" || undefined) {
        const formValues = {
          name: data.name,
          code: data.code,
          description: data.description
        };

        this.$store.dispatch("saveModelity", formValues);
        this.editModal = false;
        // this.$refs.modal.hide();
        this.clearFields();
      }
    },

    EditModel(evt) {
      this.form.id = evt._id;
      this.form.name = evt.name;
      this.form.code = evt.code;
      this.form.description = evt.description;
      this.form.isActive = evt.is_active;
      let editInfo = {
        name: evt.name,
        id: evt._id,
        code: evt.code,
        description: evt.description,
        isActive: evt.is_active
      };
      this.editModal = true;
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
      this.$store.dispatch("updateModility", {
        updatedModility: { _id, is_active: !is_active }
      });
      this.modalShow = false;
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
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
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
