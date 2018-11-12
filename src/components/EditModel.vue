<template>
 <b-modal v-model="isVisible" hide-footer>
      <form @submit="onSubmit">
            <b-form-group id="exampleInputGroup1"
                    label="name"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="name"
                      required
                      placeholder=" name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="code"
                    label-for="exampleInput1"
                   >
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="code"
                      required
                      placeholder="code">
        </b-form-input>
      </b-form-group>
       <b-form-group id="exampleInputGroup1"
                    label="description"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="description"
                      required
                      placeholder="description">
        </b-form-input>
      </b-form-group>
       <b-button type="submit" variant="primary">Submit</b-button>
      </form>
</b-modal>
    </template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    save: {
      type: Function,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    id: {
      type: String
    },
    isVisible: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      required: true
    }
  },

  data: () => {
    return {
      modalShow: false
    };
  },
  computed: {
    upForm() {
      return {
        name: this.$props.name,
        code: this.$props.code,
        description: this.$props.description,
        id: this.$props.id,
        isActive: this.$props.isActive
      };
    }
  },
  methods: {
    onSubmit() {
      this.$props.save(this.upForm);
    }
  }
};
</script>