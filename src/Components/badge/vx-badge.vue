<template>
  <span
    :class="[colorClass, sizeClass]"
    class="inline-flex items-center rounded-full font-medium"
  >
    <svg
      :class="[
        dotClass,
        {
          '-ml-0.5 mr-1.5 h-2 w-2': size === 'small',
          '-ml-1 mr-1.5 h-2 w-2': size === 'medium',
          '-ml-1 mr-1 h-1.5 w-1.5': size === 'tiny',
        },
      ]"
      fill="currentColor"
      viewBox="0 0 8 8"
      v-if="dot"
    >
      <circle
        cx="4"
        cy="4"
        r="3"
      />
    </svg>
    <slot></slot>
  </span>
  <!--  <span class="bg-green-100 text-green-800"></span>-->
  <!--  <span class="bg-orange-100 text-orange-800"></span>-->
  <!--  <span class="bg-red-100 text-red-800"></span>-->
</template>

<script>
export default {
  name: 'vx-badge',
  props: {
    enabled: {
      type: [Boolean, Number],
      default: true,
    },
    size: {
      type: String,
      default: 'small',
    },
    color: {
      type: String,
      default: 'green',
    },
    dot: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    sizeClass() {
      switch (this.size) {
        case 'tiny':
          return 'px-2.5 py-0 text-xs'
        case 'medium':
          return 'px-3 py-0.5 text-sm'
        default:
          return 'px-2.5 py-0.5 text-xs'
      }
    },
    colorClass() {
      if (this.color == 'primary') {
        return this.enabled
          ? 'bg-blue-100 text-blue-800'
          : 'bg-gray-100 text-gray-800'
      }

      return this.enabled
        ? `bg-${this.color}-100 text-${this.color}-800`
        : 'bg-gray-100 text-gray-800'
    },
    dotClass() {
      return this.enabled ? `text-${this.color}-400` : 'text-gray-400'
    },
  },
}
</script>

<style></style>
