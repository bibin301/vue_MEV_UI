<template>
  <div>
      <b-row class="text-center">
        <b-col md="12" class="py-3">
          <div class="add-button">
            <b-button variant="primary" @click="editItem">{{modalHeader}}</b-button>
          </div>
        </b-col>
      </b-row>
      <b-modal v-model="dialog" centered :title="formTitle"
        ok-title="save"
        cancel-title="cancel"
        @ok="save">
        <b-container fluid>
          <b-row class="my-1" v-for="field in header" :key="field.value">
            <b-col sm="3"><label :for="field.value">{{ field.text }}:</label></b-col>
            <b-col sm="9"><b-form-input :id="field.value" :type="field.type" v-model="editedItem[`${field.value}`]"></b-form-input></b-col>
          </b-row>
        </b-container>
      </b-modal>

			<v-dialog v-model="alertDialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">alert</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
								<div>
							  {{alertText}}
							</div>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="alertClose">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click.native="confirm">confirm</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th v-for="(col, index) in header"
            :key="index">{{ col.text }}</th>
          <th>
            Action
          </th>
          <th v-if="haveActivation">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(record, index) in dataList" v-bind:key="index">
        <td v-for="(col, index) in header"
          :key="index">{{ record[`${col.value}`] }} </td>
        <td>
          <b-button  size="sm" variant="primary" @click="editItem(record)">Modify</b-button>
        </td>
        <td v-if="haveActivation">
					<label class="switch">
						<input type="checkbox" @click="updateActiveState(record)" :checked="record.is_active">
						<span class="slider round"></span>
					</label>
        </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

	export default {
    props: {
      titleFor: String,
      header: {
        type: Array,
        required: true
      },
      dataList: {
        type: Array,
        required: true
      },
      editData: {
        type: Function,
        required: true
      },
      addData: {
        type: Function,
        required: true
      },
      haveActivation: {
        type: Boolean,
        default: false
      }
    },
		data: () => ({
      dialog: false,
      alertDialog: false,
      alertItem: {},
      editedIndex: -1,
      editedItem: {
      },
      defaultItem: {
      }
		}),
		computed: {
      modalHeader() {
        return `New ${this.$props.titleFor}`;
      },
			formTitle () {
        return this.editedIndex === -1 
          ? `New ${this.$props.titleFor}`
          : `Edit ${this.$props.titleFor}`
      },
      alertText() {
        return `are you sure want to change the state of ${this.$props.titleFor}: ${this.alertItem.name}`
      }
		},
		watch: {
			dialog (val) {
				val || this.close()
			},
			alertDialog(val) {
				val || this.alertClose()
			}
		},

		methods: {
			editItem (item) {
        console.log('item..', item);
        
				this.editedIndex = this.$props.dataList.indexOf(item)
				this.editedItem = Object.assign({}, item)
				this.dialog = true
			},
			updateActiveState (val) {
				this.alertDialog = true;
				this.alertItem = val;
			},
			close () {
				this.dialog = false
				setTimeout(() => {
					this.editedItem = Object.assign({}, this.defaultItem)
					this.editedIndex = -1
				}, 300)
			},
			alertClose () {
				this.alertDialog = false;
				this.alertItem = {};
			},
			confirm (){
				const { _id, is_active } = this.alertItem;
        this.$props.editData({ _id, is_active: !is_active });
				setTimeout(this.alertClose, 500)
			},
			save () {
				if (this.editedIndex > -1) {
          this.$props.editData(this.editedItem);
				} else {
          this.$props.addData(this.editedItem);
				}
				this.close()
		  }
		}
	}
</script>

<style scoped>
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }

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