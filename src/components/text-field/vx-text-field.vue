<template>
  <div class="mt-2 dark:bg-gray-800">
    <template v-if="pre">
      <label
        :for="id"
        class="block text-sm font-medium text-gray-700 dark:text-gray-100 h-5"
        :class="labelClass"
        v-if="label"
      >
        {{ label }}
      </label>
      <div
        class="mt-1 flex rounded-md shadow-sm"
        :class="inputWrapperClass"
      >
        <span
          class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700"
        >
          {{ pre }}
        </span>
        <input
          :id="id"
          :type="inputType"
          :name="name"
          :value="modelValue"
          @change="updateValue"
          @keyup="keyUp"
          class="border border-solid border-l-0 block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700"
          :class="inputClass"
          :placeholder="placeholder"
        />
      </div>
      <p v-if="errorMessages">
        <span
          v-for="errorMessage in errorMessages"
          :key="errorMessage"
          class="text-red-500 text-xs italic"
        >
          {{ errorMessage }}
        </span>
      </p>
    </template>
    <template v-else>
      <label
        :for="id"
        class="block text-sm font-medium text-gray-700 dark:text-gray-100 h-5"
        :class="labelClass"
        v-if="label"
      >
        {{ label }}
      </label>
      <div class="relative flex">
        <div>
          <slot name="prepend"></slot>
        </div>
        <input
          :id="id"
          :ref="id"
          type="text"
          class="border-solid mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700"
          :class="inputClass"
          :name="name"
          :placeholder="placeholder"
          :value="modelValue"
          @change="updateValue"
          @keyup="keyUp"
          v-bind="{ ...$props, ...$attrs }"
          :type="inputType"
        />
        <div
          v-if="hint"
          class="absolute top-2 right-2 w-[280px] pointer-events-none flex justify-end"
        >
          <vx-icon-with-tooltip
            :text="hint"
            color="black"
            class="pointer-events-auto"
          />
        </div>
      </div>
      <p
        v-if="bottomHint"
        class="mt-2 text-sm text-gray-500"
        v-html="bottomHint"
      ></p>
      <p v-if="errorMessages">
        <span
          v-for="errorMessage in errorMessages"
          :key="errorMessage"
          class="text-red-500 text-xs italic"
        >
          {{ errorMessage }}
        </span>
      </p>
    </template>
  </div>
</template>

<script>
import VxIconWithTooltip from '../icon-with-tooltip/vx-icon-with-tooltip.vue'

export default {
  name: 'vx-text-field',
  components: { VxIconWithTooltip },
  props: {
    id: {
      type: String,
      default: () => 'vx-text-field-' + Math.random().toString(36).substr(2, 9),
    },
    name: {
      type: String,
      default: () => 'vx-text-field-' + Math.random().toString(36).substr(2, 9),
    },
    modelValue: [String, Number],
    label: String,
    labelClass: {
      type: String,
      default: '',
    },
    pre: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    errorMessages: {
      type: [String, Array],
      default: () => [],
    },
    hint: {
      type: String,
      default: '',
    },
    bottomHint: {
      type: String,
      default: '',
    },
    nextFieldId: {
      type: String,
      default: '',
    },
    switchToNextFieldLength: {
      type: Number,
      default: 0,
    },
    inputClass: {
      type: String,
      default: '',
    },
    inputWrapperClass: {
      type: String,
      default: '',
    },
    inputType: {
      type: String,
      default: 'text',
    },
  },
  emits: ['update:modelValue', 'change'],
  methods: {
    updateValue(e) {
      this.$emit('update:modelValue', e.target.value)
    },
    keyUp(e) {
      if (
        e.target.value.length >= this.switchToNextFieldLength &&
        this.nextFieldId
      ) {
        // console.log(this.nextFieldId)
        this.$nextTick(() => {
          document.getElementById(this.nextFieldId)?.focus()
        })
      }

      this.$emit('change', e)
    },
  },
}
</script>

<style scoped>
div[type='time'] {
  border: none;
}
</style>
