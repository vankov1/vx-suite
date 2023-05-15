<template>
  <div class="mt-2">
    <template v-if="pre">
      <label :for="id" class="block text-sm font-medium text-gray-700" v-if="label">{{ label }}</label>
      <div class="mt-1 flex rounded-md shadow-sm">
        <span
          class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">{{ pre }}</span>
        <input
          :id="id"
          :ref="id"
          type="text"
          :name="name"
          :value="modelValue"
          @change="updateValue"
          class="border-solid border-l-0 block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" :placeholder="placeholder">
      </div>
      <p v-if="errorMessages">
        <span v-for="errorMessage in errorMessages" :key="errorMessage" class="text-red-500 text-xs italic">{{ errorMessage }}</span>
      </p>
    </template>
    <template v-else>
      <label :for="id" class="block text-sm font-medium text-gray-700" v-if="label">{{ label }}</label>
      <div class="relative">
        <input
          :id="id"
          :ref="id"
          type="text"
          class="border-solid mt-1 block w-full rounded-md !border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          :name="name"
          :placeholder="placeholder"
          :value="modelValue"
          @change="updateValue"
          v-bind="{...$props, ...$attrs}">
        <div v-if="hint" class="absolute top-2 right-2 w-[280px] pointer-events-none flex justify-end">
          <vx-help-icon :text="hint" color="black" class="pointer-events-auto"/>
        </div>
      </div>
      <p v-if="bottomHint" class="mt-2 text-sm text-gray-500" v-html="bottomHint"></p>
      <p v-if="errorMessages">
        <span v-for="errorMessage in errorMessages" :key="errorMessage" class="text-red-500 text-xs italic">{{ errorMessage }}</span>
      </p>
    </template>
  </div>
</template>

<script>
import VxHelpIcon from "./icons/vx-help-icon-with-tooltip.vue";

export default {
  name: "vx-text-field",
  components: {VxHelpIcon},
  props: {
    id: {
      type: String,
      default: () => 'vx-text-field-' + Math.random().toString(36).substr(2, 9)
    },
    name: {
      type: String,
      default: () => 'vx-text-field-' + Math.random().toString(36).substr(2, 9)
    },
    modelValue: [String, Number],
    label: String,
    pre: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    errorMessages: {
      type: [String, Array],
      default: () => []
    },
    hint: {
      type: String,
      default: ''
    },
    bottomHint: {
      type: String,
      default: ''
    },
  },
  emits: ["update:modelValue"],
  methods: {
    updateValue(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
}
</script>

<style scoped>
div[type='time'] {
  border: none;
}
</style>
