<template>
  <div>
    <input
      type="color"
      id="head"
      name="head"
      value="#e66465"
    />
  </div>
</template>

<script>
export default {
  name: 'VxSwatchWithPicker',
  props: {
    color: {
      type: String,
      default: '#000',
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    colorUpdated(v) {
      console.log(v)
      this.$emit('color-updated', v.hex)
    },
  },
}
</script>

<style scoped></style>
