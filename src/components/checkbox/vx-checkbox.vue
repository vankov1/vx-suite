<template>
  <div class="relative flex items-start">
    <div class="flex h-5 items-center">
      <input
        :id="id"
        :checked="modelValue"
        @input="emitUpdate($event.target.checked)"
        aria-describedby="comments-description"
        type="checkbox"
        class="h-4 w-4 border rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:bg-gray-800"
      />
    </div>
    <div class="ml-3 text-sm cursor-pointer x">
      <label
        :for="id"
        class="font-medium text-gray-700 dark:text-gray-100 cursor-pointer"
        ><slot name="label">{{ label }}</slot></label
      >
      <p class="text-gray-500">
        <slot name="description">{{ description }}</slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vx-checkbox',
  props: {
    id: {
      type: String,
      default: () => 'vx-checkbox-' + Math.random().toString(36).substr(2, 9),
    },
    label: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    emitUpdate(value) {
      this.$emit('update:modelValue', value)
    },
  },
}
</script>

<style scoped></style>
