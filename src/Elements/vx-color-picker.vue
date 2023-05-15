<template>
  <div>
    <div class="form__field">
      <div v-bind:class="(errorMessages.length ? 'form__label error--text' : 'form__label')">
        <label>Please choose a color:</label>
      </div>
      <div class="form__input">
<!--        <v-swatches inline v-model="color" :swatches="swatches"></v-swatches>-->
        <p v-if="errorMessages.length" class="error--text text-caption">{{this.errorMessages[0]}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import VSwatches from 'vue-swatches'
// import 'vue-swatches/dist/vue-swatches.css'

export default {
  name: 'ColorPicker',
  // components: {VSwatches},
  mixins: [],
  props: {
    swatches: {
      type: Array
    },
    errorMessages: {
      type: Array,
      default:  () => []
    },
    selectedColor: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      color: '',
    }
  },
  watch: {
    color: {
      handler: function (val) {
        this.$emit('update:color', val)
      },
      deep: true,
    },
  },
  created() {
  },
  updated() {
    if (this.selectedColor) {
      this.color = this.selectedColor;
    }
  },
  methods: {},
}
</script>

<style></style>
