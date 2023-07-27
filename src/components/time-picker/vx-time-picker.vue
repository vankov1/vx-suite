<template>
  <div></div>
</template>

<script>
export default {
  name: 'VxTimePicker',
  props: {
    label: {
      type: String,
      default: 'Show start',
    },
    hint: {
      type: String,
      default: '',
    },
    initialValue: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      timeMenu: false,
      time: null,
    }
  },
  created() {
    this.time = this.initialValue
  },
  methods: {
    inputChange() {
      this.$emit('input', this.time)
    },
  },
}
</script>

<style scoped></style>
