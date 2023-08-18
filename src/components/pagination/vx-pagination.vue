<template>
  <nav
    class="relative flex rounded-md shadow-sm justify-between w-full my-6"
    aria-label="Pagination"
  >
    <template v-for="page in paginatedItem.links">
      <template v-if="page.url">
        <vx-button
          :inertia-href="page.url"
          :key="page.label"
          :class="{
            'bg-indigo-900': page.active,
            'text-gray-700': page.active,
            'hover:bg-indigo-800': !page.active,
          }"
        >
          {{ page.label }}
        </vx-button>
      </template>
      <template v-else>
        <span
          :key="page.label"
          aria-current="page"
          class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-500"
        >
          {{ page.label }}
        </span>
      </template>
    </template>
  </nav>
</template>

<script>
import VxButton from '../button/vx-button.vue'

export default {
  name: 'vx-pagination',
  props: {
    paginatedItem: {
      type: Object,
      required: true,
    },
  },
  components: { VxButton },
}
</script>

<style scoped></style>
