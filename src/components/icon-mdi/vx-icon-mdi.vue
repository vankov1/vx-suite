<template>
  <i :class="iconClass"></i>
</template>

<script>
export default {
  name: 'vx-icon-mdi',
  props: {
    name: {
      type: String,
      required: false,
    },
  },
  computed: {
    iconClass() {
      // Get the content from this.$slots.default()[0].children and remove leading/trailing spaces
      let content = this.$slots.default()[0].children.trim()

      // Check if the content starts with "mdi-"
      if (content.startsWith('mdi-')) {
        // Remove the "mdi-" prefix
        content = content.substring(4)
      }

      return `mdi mdi-${content}`
    },
  },
}
</script>

<style>
@import '@mdi/font/css/materialdesignicons.min.css';
</style>
