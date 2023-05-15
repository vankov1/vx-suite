<template>
  <!-- DO NOT USE-->
  <span class="isolate inline-flex rounded-md shadow-sm">
    <button type="button" :class="buttonClasses" class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">Years</button>
    <button type="button" :class="buttonClasses" class="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">Months</button>
    <button type="button" :class="buttonClasses" class="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">Days</button>
  </span>
</template>

<script>
export default {
  name: "vx-button-group",
  props: {
    size: {
      type: String,
      default: 'normal'
    },
    buttons: {
      type: Array,
      default: () => []
    },
  },
  methods: {
    buttonClasses(button) {
      const classes = [
        'relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'
      ];
      if (button.active) {
        classes.push('bg-indigo-50 border-indigo-500 text-indigo-600 z-10');
      }
      return classes;
    },
  },
}
</script>

<style scoped>

</style>
