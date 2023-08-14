<template>
  <div class="flex flex-col items-start">
    <label
      class="block text-sm font-medium text-gray-700 dark:text-gray-100 h-5"
    >
      {{ label }}
    </label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vx-input-label',
  props: {
    label: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped></style>
