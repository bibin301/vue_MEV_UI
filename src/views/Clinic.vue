<template>
  <v-list-container
    titleFor="clinic"
    :header="headers"
    :dataList="clinicLists"
    :editData="handleClinicEdit"
    :addData="handleClinicAdd"
		:haveActivation="activityControl"
    >
  </v-list-container>
</template>

<script>
  import { mapGetters } from 'vuex';
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
					text: 'Name',
					align: 'left',
					sortable: false,
					value: 'name'
				},
				{
					text: 'Country',
					align: 'left',
					sortable: false,
					value: 'country'
				},
				{
					text: 'state',
					align: 'left',
					sortable: false,
					value: 'state'
				},
				{
					text: 'city',
					align: 'left',
					sortable: false,
					value: 'city'
				},
				{
					text: 'Pin Code',
					align: 'left',
					sortable: false,
					value: 'pin_code'
				},
				{
					text: 'Latitude',
					align: 'left',
					sortable: false,
					value: 'latitude'
				},
				{
					text: 'Longtitude',
					align: 'left',
					sortable: false,
					value: 'longtitude'
				},
			],
			activityControl: true,
    }),
    computed: {
      ...mapGetters({
        clinicLists: 'clinicLists' 
      }),
    },
    methods: {
      initialize () {
        this.$store.dispatch("getClinicLists")
      },
      handleClinicEdit(updatedClinic) {
        this.$store.dispatch("editClinic", updatedClinic)
      }, 
      handleClinicAdd(clinic) {
        this.$store.dispatch("addClinic", clinic)
      }
    }
	}
</script>
