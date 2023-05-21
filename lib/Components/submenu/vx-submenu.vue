<template>
  <div class="bg-gray-200 py-2">
    <div class="container w-full mx-auto">
      <nav class="bg-gray-200 py-1">
        <span
          class="text-monospace text-sm font-bold"
          v-if="itemName"
        >
          {{ itemName }} »
        </span>

        <vx-button
          class="!text-gray-800 hover:!bg-gray-700 hover:!text-white px-3 py-2 rounded-md text-sm font-medium bg-transparent mx-2"
          :inertiaHref="item.href"
          v-for="item in menuItems"
        >
          {{ item.name }}
        </vx-button>
      </nav>
    </div>
  </div>
</template>
<script>
import VxButton from '../button/vx-button.vue'

export default {
  name: 'vx-submenu',
  components: { VxButton },
  mixins: [],
  props: {
    itemName: {
      type: String,
      default: '',
    },
    menuItems: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  methods: {},
}
</script>
<style></style>
