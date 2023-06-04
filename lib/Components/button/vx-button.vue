<template>
  <button
    class="vx-btn"
    :class="[
      colorClasses,
      iconClasses,
      variantClasses,
      sizeClasses,
      disabledClasses,
      useCssVariables ? 'vx-btn--css-vars' : '',
    ]"
    :disabled="isDisabled"
    @click="onClick"
  >
    <span v-if="!loadingInProcess"><slot /></span>
    <span v-else>
      <svg
        class="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12a8 8 0 01-8 8v4c4.627 0 10-5.373 10-12h-4zm-2-5.291A7.962 7.962 0 0120 12h4c0-3.042-1.135-5.824-3-7.938l-3 2.647z"
        ></path>
      </svg>
    </span>
  </button>
  <!--  <button type="button" class="">-->
  <!--    <PlusIconMini class="h-5 w-5" aria-hidden="true" />-->
  <!--  </button>-->
  <!--  <div class="inline-flex justify-center rounded-md border border-transparent py-2 px-3 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-green-600 text-white hover:bg-green-700 focus:ring-green-500"></div>-->
  <!-- <div class="inline-flex justify-center rounded-md border border-transparent py-2 px-3 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500"></div>  -->
  <!-- <div class="inline-flex justify-center rounded-md border border-transparent py-2 px-3 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500"></div>  -->
  <!-- <div class="focus:ring-white !shadow-none inline-flex items-center !rounded-full border border-transparent p-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center rounded-full border border-transparent p-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-600 text-gray-600 bg-white hover:bg-gray-50 focus:ring-white !shadow-none px-2.5 py-1.5 text-xs px-3 py-2 text-sm px-4 py-2 text-base"></div>-->
  <!--  <div class="border border-red-600 text-red-600 bg-white hover:bg-red-50"></div>-->
  <!--  <div class="border border-purple-600 text-purple-600 bg-white hover:bg-purple-50"></div>-->
  <!--  <div class="border border-gray-600 text-gray-600 bg-white hover:bg-gray-50"></div>-->
  <!--  <div class="border border-slate-600 text-slate-600 bg-white hover:bg-slate-50"></div>-->
  <!--  <div class="border border-green-600 text-green-600 bg-white hover:bg-green-50"></div>-->
  <!--  <div class="border border-yellow-600 text-yellow-600 bg-white hover:bg-yellow-50"></div>-->
  <!--  <div class="border border-blue-600 text-blue-600 bg-white hover:bg-blue-50"></div>-->
  <!--  <div class="border border-indigo-600 text-indigo-600 bg-white hover:bg-indigo-50"></div>-->
  <!--  <div class="border border-pink-600 text-pink-600 bg-white hover:bg-pink-50"></div>-->
  <!--  <div class="border border-red-600 text-red-600 bg-white hover:bg-red-50"></div>-->
  <!--  <div class="border border-purple-600 text-purple-600 bg-white hover:bg-purple-50"></div>-->
  <!--  <div class="text-gray-600 hover:text-gray-700 focus:ring-gray-500 bg-none hover:bg-none focus:ring-offset-none"></div>-->
</template>

<script>
export default {
  name: 'vx-button',
  props: {
    block: Boolean,
    icon: Boolean,
    loading: Boolean,
    href: String,
    inertiaHref: String,
    color: {
      type: String,
      default: 'primary',
    },
    target: {
      type: String,
      default: '_self',
    },
    useCssVariables: {
      type: [Boolean, Object],
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'normal',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    loading: function (val) {
      if (val) {
        this.loadingInProcess = true
        setTimeout(() => {
          this.loadingInProcess = false
        }, 250)
      }
    },
  },
  computed: {
    colorClasses() {
      const colors = {
        primary: 'indigo',
        secondary: 'gray',
        gray: 'gray',
        slate: 'slate',
        danger: 'red',
        success: 'green',
        warning: 'yellow',
        info: 'blue',
        blue: 'blue',
        indigo: 'indigo',
        purple: 'purple',
        pink: 'pink',
        red: 'red',
        orange: 'orange',
        yellow: 'yellow',
        green: 'green',
      }

      const colorClasses = Object.entries(colors).reduce(
        (acc, [key, value]) => {
          acc[
            key
          ] = `bg-${value}-600 hover:bg-${value}-700 focus:ring-${value}-500`
          return acc
        },
        {}
      )

      let classes = ''

      if (!this.icon && !this.rounded && this.size === 'normal') {
        classes += 'px-3 py-2'
      }

      if (!this.outlined) {
        classes += ' text-white'
      }

      return `${classes} self-center inline-flex justify-center rounded-md border border-transparent text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        colorClasses[this.color]
      }`
    },
    variantClasses() {
      let classes = ''

      if (this.rounded) {
        classes += ' rounded-full'
      }

      if (this.block) {
        classes += ' w-full'
      }

      if (this.outlined) {
        classes += ` border border-${this.color}-600 text-${this.color}-600 bg-white hover:bg-${this.color}-50`
      }

      return classes
    },
    iconClasses() {
      if (this.icon) {
        return 'focus:ring-white !shadow-none inline-flex items-center !rounded-full border border-transparent p-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2'
      }

      //inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
    },
    sizeClasses() {
      const sizes = {
        tiny: 'p-1',
        small: 'p-1.5',
        normal: 'p-2',
        large: 'p-3',
      }

      return sizes[this.size]
    },
    disabledClasses() {
      if (this.disabled) {
        return 'opacity-50 cursor-not-allowed'
      }
    },
    isDisabled() {
      return this.disabled || this.loading
    },
  },
  data() {
    return {
      loadingInProcess: false,
    }
  },
  methods: {
    onClick() {
      if (this.target === '_blank') {
        window.open(this.href, this.target)
        return
      }

      if (this.inertiaHref) {
        this.$inertia.get(this.inertiaHref)
      }
    },
  },
}
</script>

<style scoped>
.vx-btn {
  --vx-btn-bg: v-bind(useCssVariables[ 'background-color']);
  --vx-btn-color: v-bind(useCssVariables[ 'color']);
  --vx-btn-border-color: v-bind(useCssVariables[ 'border-color']);
}
.vx-btn--css-vars {
  background: var(--vx-btn-bg);
  color: var(--vx-btn-color);
  border-color: var(--vx-btn-border-color);
}
</style>
