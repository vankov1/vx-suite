<template>
  <div class="my-4">
    <hr v-if="topSeparator" class="mb-2">

    <h2 class="text-xl font-bold text-gray-700">
      <slot/>
    </h2>
    <p class="text-sm text-gray-400" v-if="$slots.description">
      <slot name="description"/>
    </p>

    <hr v-if="bottomSeparator" class="mt-2">
  </div>
</template>

<script>
export default {
  name: "vx-section-title",
  props: {
    topSeparator: {
      type: Boolean,
      default: false
    },
    bottomSeparator: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped>

</style>
