<template>
  <a :class="[colorClasses]" class="ml-6 whitespace-nowrap text-sm font-semibold text-sky-500 hover:text-sky-600 cursor-pointer" @click="onClick">
    <slot></slot>
    <span class="ml-1" v-if="icon" aria-hidden="true">{{ iconValue }}</span>
  </a>
  <!-- <div class="text-sky-500 hover:text-sky-600"></div> -->
  <!-- <div class="text-gray-500 hover:text-gray-600"></div> -->
  <!-- <div class="text-green-500 hover:text-green-600"></div> -->
  <!-- <div class="text-yellow-500 hover:text-yellow-600"></div> -->
  <!-- <div class="text-red-500 hover:text-red-600"></div> -->
  <!-- <div class="text-blue-500 hover:text-blue-600"></div> -->
  <!-- <div class="text-indigo-500 hover:text-indigo-600"></div> -->
  <!-- <div class="text-purple-500 hover:text-purple-600"></div> -->
  <!-- <div class="text-pink-500 hover:text-pink-600"></div> -->
  <!-- <div class="text-slate-500 hover:text-slate-600"></div> -->

</template>

<script>
export default {
  name: "vx-link",
  props: {
    icon: {
      type: [String, Boolean],
      default: true
    },
    href: String,
    inertiaHref: String,
    color: {
      type: String,
      default: 'primary'
    },
    target: {
      type: String,
      default: '_self'
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
      };

      const colorClasses = Object.entries(colors).reduce((acc, [key, value]) => {
        acc[key] = `text-${value}-500 hover:text-${value}-600`;
        return acc;
      }, {});

      let classes = '';

      return `${classes}  ${colorClasses[this.color]}`;
    },
    iconValue() {
      if (typeof this.icon === 'string') {
        return this.icon;
      }
      return this.icon ? '→' : '';
    }
  },
  methods: {
    onClick() {
      if (this.target === '_blank') {
        window.open(this.href, this.target);
        return;
      }

      if (this.inertiaHref) {
        this.$inertia.get(this.inertiaHref)
      }
    },
  }
}
</script>

<style scoped>

</style>
