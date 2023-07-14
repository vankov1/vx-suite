<template>
  <div class="mx-auto mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3
            class="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300"
          >
            <slot name="title" />
          </h3>
          <p class="mt-1 text-sm text-gray-600">
            <slot name="description" />
          </p>
        </div>
      </div>
      <div class="mt-5 md:col-span-2 md:mt-0">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import VxSectionTitle from '../section-title/vx-section-title.vue'
export default {
  name: 'vx-two-column-container',
  components: { VxSectionTitle },
}
</script>

<style scoped></style>
