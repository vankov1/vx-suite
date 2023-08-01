<template>
  <div>
    <slot
      :item="item"
      :index="index"
      :expanded="expanded"
      @click="onClick"
    >
      <div
        class="cursor-pointer border-b border-gray-200 py-4 flex justify-between items-center"
        @click="onClick"
      >
        <div>
          <h4 class="font-semibold">{{ item.question }}</h4>
          <p
            class="text-gray-700"
            v-if="expanded"
          >
            {{ item.answer }}
          </p>
        </div>
        <div class="ml-8">
          <svg
            v-if="!expanded"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            :stroke-width="strokeWidth"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            :stroke-width="strokeWidth"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 12h-15"
            />
          </svg>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'vx-accordion-item',
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    expanded: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    strokeWidth() {
      return this.expanded ? '1.5' : '1'
    },
  },
  methods: {
    onClick() {
      this.$emit('click', this.index)
    },
  },
})
</script>

<style scoped></style>
