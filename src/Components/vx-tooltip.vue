<template>
  <Popper :hover="hover" :placement="placement">
    <slot>activator</slot>
    <template #content>
      <div
        class="px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700"
        v-html="tooltip"></div>
    </template>
  </Popper>
</template>
<script>
import Popper from "vue3-popper";

export default {
  components: {
    Popper,
  },
  props: {
    hover: {
      type: Boolean,
      default: false,
    },
    tooltip: {
      type: String,
      default: null,
    },
    placement: {
      type: String,
      default: "top",
    },
  },
};
</script>

<style>
.popper {
  z-index: 50;
  max-width: 280px;
  padding: 0.75rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
  background-color: #6b7280;
  background-clip: padding-box;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
</style>
