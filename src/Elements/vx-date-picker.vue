<template>
  <VueDatePicker
    v-model="date"
    :range="range"
    :enable-time-picker="enableTimePicker"
  ></VueDatePicker>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  name: "vx-date-picker",
  components: {
    VueDatePicker,
  },
  props: {
    modelValue: {
      type: String,
      default: null,
    },
    range: {
      type: Boolean,
      default: false,
    },
    enableTimePicker: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      date: null,
    };
  },
  watch: {
    date: function (val) {
      this.$emit("update:modelValue", val);
    },
  },
}
</script>

<style scoped>

</style>
