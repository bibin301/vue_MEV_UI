<template>
  <v-list-container
    titleFor="room"
    :header="headers"
    :dataList="roomLists"
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
						text: 'Modality',
						align: 'left',
						sortable: false,
						value: 'modality_id'
					},
					{
						text: 'Clinic',
						align: 'left',
						sortable: false,
						value: 'clinic_id'
					}
      ],
      activityControl: true
    }),
    computed: {
      ...mapGetters({
        roomLists: 'roomLists' 
      }),
    },
    methods: {
      initialize () {
        this.$store.dispatch("getRoomLists")
      },
      handleClinicEdit(updatedRoom) {
        this.$store.dispatch("updateRoom", updatedRoom)
      }, 
      handleClinicAdd(room) {
        this.$store.dispatch("addRoom", room)
      }
    }
	}
</script>
