<template>
  <div class="relative">
    <div
      class="absolute inset-0 flex items-center"
      aria-hidden="true"
    >
      <div
        class="w-full border-t"
        :class="borderClass"
      />
    </div>
    <div class="relative flex justify-start">
      <span
        class="bg-white dark:bg-gray-800 pr-2 text-sm text-gray-500 dark:text-gray-100"
        :class="labelClass"
        >{{ label }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'vx-divider',
  props: {
    label: {
      type: String,
      default: '',
    },
    borderClass: {
      type: String,
      default: 'border-gray-300',
    },
    labelClass: {
      type: String,
      default: 'text-gray-500',
    },
  },
}
</script>

<style scoped></style>
