<template>
  <SwitchGroup
    as="div"
    class="flex items-center justify-between"
  >
    <span class="flex flex-grow flex-col">
      <SwitchLabel
        as="span"
        class="text-sm font-medium text-gray-900 dark:text-white"
        passive
        >{{ label }}</SwitchLabel
      >
      <SwitchDescription
        as="span"
        class="text-sm text-gray-500"
        >{{ description }}</SwitchDescription
      >
    </span>
    <Switch
      v-model="enabled"
      :class="[
        enabled ? 'bg-indigo-600' : 'bg-gray-200',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
      ]"
    >
      <span class="sr-only">Use setting</span>
      <span
        :class="[
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
        ]"
      >
        <span
          :class="[
            enabled
              ? 'opacity-0 ease-out duration-100'
              : 'opacity-100 ease-in duration-200',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
          ]"
          aria-hidden="true"
        >
          <svg
            class="h-3 w-3 text-gray-400"
            fill="none"
            viewBox="0 0 12 12"
          >
            <path
              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span
          :class="[
            enabled
              ? 'opacity-100 ease-in duration-200'
              : 'opacity-0 ease-out duration-100',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
          ]"
          aria-hidden="true"
        >
          <svg
            class="h-3 w-3 text-indigo-600"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path
              d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
            />
          </svg>
        </span>
      </span>
    </Switch>
  </SwitchGroup>
</template>

<script>
import {
  Switch,
  SwitchDescription,
  SwitchGroup,
  SwitchLabel,
} from '@headlessui/vue'
export default {
  name: 'vx-switch',
  components: { SwitchDescription, SwitchLabel, SwitchGroup, Switch },
  props: {
    label: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [Boolean, Number, String],
      default: false,
    },
  },
  watch: {
    enabled: {
      handler(value) {
        this.$emit('update:modelValue', value)
      },
    },
  },
  data() {
    return {
      enabled: false,
    }
  },
  created() {
    if (typeof this.modelValue === 'boolean') {
      this.enabled = this.modelValue
      return
    }

    if (
      typeof this.modelValue === 'string' &&
      (this.modelValue === 'true' || this.modelValue === 'false')
    ) {
      console.log('stringx')
      this.enabled = this.modelValue === 'true'
      return
    }

    if (typeof this.modelValue === 'string') {
      console.log('string')

      this.enabled = parseInt(this.modelValue) === 1
      return
    }

    if (typeof this.modelValue === 'number') {
      console.log('number')
      this.enabled = this.modelValue === 1
      return
    }
  },
}
</script>

<style scoped></style>
