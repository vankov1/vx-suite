<template>
  <div class="flex items-center content-center gap-2">
    <div
      class="rounded-full w-8 h-8 border-2 border-gray-100"
      :style="{ backgroundColor: color }"
      @click="$refs['colorPicker'].focus()"
    >
      <input
        ref="colorPicker"
        class="rounded-full w-8 h-8 border-2 border-gray-200 opacity-0"
        type="color"
        id="head"
        name="head"
        :value="color"
        @change="colorUpdated($event.target.value)"
      />
    </div>
    <label
      class="flex text-sm text-gray-700"
      :for="label"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'VxSwatchWithPicker',
  props: {
    color: {
      type: String,
      default: '#000',
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    colorUpdated(v) {
      this.$emit('color-updated', v)
    },
  },
}
</script>

<style scoped></style>
