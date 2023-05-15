<template>
  <vx-tooltip :tooltip="text" :hover="hover" class="pointer-events-auto">
      <vx-icon name="help" :size="size" :color="color" class="mx-1" v-bind="$props"></vx-icon>
  </vx-tooltip>
</template>

<script>
import VxIcon from "./vx-icon.vue";
import VxTooltip from "../vx-tooltip.vue";

export default {
  name: "vx-help-icon",
  components: {VxTooltip, VxIcon},
  mixins: [],
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'primary'
    },
    hover: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'small'
    },
  },
}
</script>

<style></style>
