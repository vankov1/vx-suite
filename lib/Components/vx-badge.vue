<template>
  <span :class="colorClass" class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium" v-if="size == 'small'">
    <svg :class="dotClass" class="-ml-0.5 mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8" v-if="dot">
      <circle cx="4" cy="4" r="3" />
    </svg>
    <slot></slot>
  </span>
  <span :class="colorClass" class="inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium" v-if="size == 'medium'">
    <svg :class="dotClass" class="-ml-1 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8" v-if="dot">
      <circle cx="4" cy="4" r="3" />
    </svg>
    <slot></slot>
  </span>
<!--  <div class="bg-yellow-100 text-yellow-800"></div>-->
<!--  <div class="bg-orange-100 text-orange-800"></div>-->
</template>

<script>
export default {
  name: 'vx-badge',
  components: {},
  mixins: [],
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
  data() {
    return {
      style: 'green',
      colorClass: '',
      dotClass: '',
    }
  },
  computed: {},
  watch: {},
  created() {
    if (this.color) {
      this.colorClass = this.enabled ? 'bg-' + this.color + '-100 text-' + this.color + '-800' : 'bg-gray-100 text-gray-800'
      this.dotColor = this.enabled ? 'text-' + this.color + '-400' : 'text-gray-400'
    } else {
      this.colorClass = this.enabled ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
      this.dotColor = this.enabled ? 'text-green-400' : 'text-gray-400'
    }
  },
  methods: {},
}
</script>

<style></style>
