<template>
  <div>
    <b-form-input v-model="searchHint"
      type="text"
      placeholder="search by Patient"></b-form-input>
    <v-list-container
      titleFor="patient"
      :header="headers"
      :dataList="resultPatient"
      :editData="handleClinicEdit"
      :addData="handleClinicAdd"
      >
    </v-list-container>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { filter as _filter,
    includes as _includes } from 'lodash';
  import ListContainer from '../components/ListContainer';

  export default {
    components: {
      "v-list-container": ListContainer
    },
    created () {
			this.initialize()
		},
    data: () => ({
      headers: [
				{
						text: 'First Name',
            type: 'text',
            align: 'left',
						sortable: false,
						value: 'first_name'
					},
					{
						text: 'Last Name',
            type: 'text',
						align: 'left',
						sortable: false,
						value: 'last_name'
					},
					{
						text: 'Health Card No',
            type: 'text',
						align: 'left',
						sortable: false,
						value: 'healthcard_no'
					}
      ],
      searchHint: ''
    }),
    computed: {
      ...mapGetters({
        patientLists: 'patientLists' 
      }),
      resultPatient() {
        return this.searchHint
          ? _filter(this.patientLists,
            patient => _includes(patient.first_name, this.searchHint))
          : this.patientLists;
      }
    },
    methods: {
      initialize () {
        this.$store.dispatch("getPatientLists")
      },
      handleClinicEdit(updatedPatient) {
        this.$store.dispatch("updatePatient", updatedPatient)
      }, 
      handleClinicAdd(patient) {
        this.$store.dispatch("addPatient", patient)
      }
    }
	}
</script>
