<template>
  <div
    class="bg-white py-2 dark:bg-gray-800 shadow dark:text-gray-100 px-2 sm:px-8 print:hidden"
  >
    <div class="container w-full max-w-[1212px] mx-auto">
      <nav class="py-1">
        <span
          class="text-monospace text-sm font-bold"
          v-if="itemName"
        >
          {{ itemName }} »
        </span>

        <vx-button
          class="!text-slate-700 hover:!border-indigo-700 border-2 hover:!text-white px-3 !py-0 !rounded-full text-sm font-medium bg-transparent border-transparent !shadow-none outline-1 mx-1 sm:mx-2 transition duration-150 ease-in-out data-[active=true]:border-indigo-700 my-1 sm:my-0"
          :inertiaHref="item.href"
          v-for="item in menuItems"
          :is-active="$page.props.ziggy.location == item.href"
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
}
</script>
<style></style>
