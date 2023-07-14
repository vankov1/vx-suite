<template>
  <div :class="alertClasses">
    <div class="flex">
      <div class="flex-shrink-0">
        <InformationCircleIcon
          v-if="type == 'info'"
          class="h-5 w-5 text-blue-400"
          aria-hidden="true"
        />
        <ExclamationCircleIcon
          v-if="type == 'error'"
          class="h-5 w-5 text-red-400"
          aria-hidden="true"
        />
        <CheckCircleIcon
          v-if="type == 'success'"
          class="h-5 w-5 text-green-400"
          aria-hidden="true"
        />
      </div>
      <div class="ml-3 flex-1 md:flex md:justify-between">
        <p :class="messageClasses"><slot></slot></p>
        <p
          class="mt-3 text-sm md:mt-0 md:ml-6"
          v-if="buttonText"
        >
          <button
            @click="buttonClicked"
            :class="buttonClasses"
          >
            {{ buttonText }}
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from '@heroicons/vue/20/solid'

export default {
  name: 'vx-alert',
  components: { InformationCircleIcon, ExclamationCircleIcon, CheckCircleIcon },
  props: {
    type: {
      type: String,
      default: 'info',
    },
    buttonText: {
      type: String,
      default: '',
    },
  },
  computed: {
    alertClasses() {
      return {
        'rounded-md p-4': true,
        'bg-blue-50': this.type === 'info',
        'bg-red-50': this.type === 'error',
        'bg-green-50': this.type === 'success',
      }
    },
    messageClasses() {
      return {
        'text-sm': true,
        'text-blue-700': this.type === 'info',
        'text-red-700': this.type === 'error',
        'text-green-700': this.type === 'success',
      }
    },
    buttonClasses() {
      return {
        'whitespace-nowrap font-medium': true,
        'text-blue-700 hover:text-blue-600': this.type === 'info',
        'text-red-700 hover:text-red-600': this.type === 'error',
        'text-green-700 hover:text-green-600': this.type === 'success',
      }
    },
  },
  methods: {
    buttonClicked() {
      this.$emit('button-clicked')
    },
  },
}
</script>
