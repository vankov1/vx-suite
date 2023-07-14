<template>
  <div
    class="rounded-md bg-blue-50 p-4"
    v-if="type == 'info'"
  >
    <div class="flex">
      <div class="flex-shrink-0">
        <InformationCircleIcon
          class="h-5 w-5 text-blue-400"
          aria-hidden="true"
        />
      </div>
      <div class="ml-3 flex-1 md:flex md:justify-between">
        <p class="text-sm text-blue-700"><slot></slot></p>
        <p
          class="mt-3 text-sm md:mt-0 md:ml-6"
          v-if="buttonText"
        >
          <button
            @click="buttonClicked"
            class="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
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
import { InformationCircleIcon } from '@heroicons/vue/20/solid'

export default {
  name: 'vx-alert',
  components: { InformationCircleIcon },
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
  methods: {
    buttonClicked() {
      this.$emit('button-clicked')
    },
  },
}
</script>

<style scoped></style>
