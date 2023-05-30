<template>
  <div class="mt-2">
    <label
      :for="id"
      class="block text-sm font-medium text-gray-700"
      v-if="label"
    >
      {{ label }}
    </label>
    <textarea
      :id="id"
      class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 border border-gray-300 rounded-md dark:text-gray-100 dark:border-gray-700 dark:bg-gray-900"
      :class="{
        'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red':
          error,
        'border-gray-300 text-gray-900 placeholder-gray-300 focus:border-primary-300 focus:shadow-outline-primary':
          !error,
      }"
      :value="modelValue"
      @input="updateValue"
      :placeholder="placeholder"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'vx-textarea',
  props: {
    id: {
      type: String,
      default: () => 'vx-textarea-' + Math.random().toString(36).substr(2, 9),
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
    modelValue: [String, Number],
  },
  emits: ['update:modelValue'],
  methods: {
    updateValue(e) {
      this.$emit('update:modelValue', e.target.value)
    },
  },
}
</script>

<style scoped></style>
