<template>
  <div>
    <slot
      v-for="(item, index) in faq"
      :key="index"
      :item="item"
      :index="index"
      :expanded="index === expandedIndex"
      @click="expand(index)"
    >
      <div
        class="cursor-pointer border-b border-gray-200 py-4 flex justify-between items-center"
        @click="expand(index)"
      >
        <div>
          <h4 class="font-semibold">{{ item.question }}</h4>
          <p
            class="text-gray-700"
            v-if="index === expandedIndex"
            v-html="item.answer"
          ></p>
        </div>
        <div class="ml-8">
          <svg
            v-if="index !== expandedIndex"
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
  name: 'vx-accordion',
  props: {
    faq: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      expandedIndex: null,
    }
  },
  methods: {
    expand(index) {
      this.expandedIndex = index === this.expandedIndex ? null : index
    },
  },
})
</script>

<style scoped></style>
