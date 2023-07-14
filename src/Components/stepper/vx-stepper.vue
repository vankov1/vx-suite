<template>
  <div>
    <nav aria-label="Progress">
      <ol
        role="list"
        class="space-y-4 md:flex md:space-y-0 md:space-x-8"
      >
        <li
          v-for="step in steps"
          :key="step.name"
          class="md:flex-1"
        >
          <button
            v-if="step.status === 'completed'"
            :class="`group flex flex-col border-l-4 border-${completedColor}-600 py-2 pl-4 hover:border-${completedColor}-800 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0 w-full`"
            @click="step.onClick"
          >
            <span class="text-sm font-medium hidden md:flex">{{
              step.name
            }}</span>
          </button>
          <button
            v-else-if="step.status === 'current'"
            :class="`flex flex-col border-l-4 border-${currentColor}-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0 w-full`"
            aria-current="step"
            :disabled="true"
            @click="step.onClick"
          >
            <!--            <span :class="`text-sm font-medium text-${currentColor}-600`">{{ step.id }}</span>-->
            <span class="text-sm font-medium hidden md:flex">{{
              step.name
            }}</span>
          </button>
          <button
            v-else
            :class="`group flex flex-col border-l-4 border-${upcomingColor} border-${upcomingColor}-200 py-2 pl-4 hover:border-${upcomingColor}-300 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0 w-full`"
            :disabled="true"
            @click="step.onClick"
          >
            <!--            <span :class="`text-sm font-medium text-${upcomingColor}-500 group-hover:text-${upcomingColor}-700`">{{ step.id }}</span>-->
            <span class="text-sm font-medium hidden md:flex">{{
              step.name
            }}</span>
          </button>
        </li>
      </ol>
    </nav>
  </div>
  <!--  <span class="text-blue-600 border-blue-600 border-blue-800"></span>-->
  <!--  <span class="text-sky-600 border-sky-600 border-sky-800"></span>-->
  <!--  <span class="text-gray-500 text-gray-700 border-gray-200 border-gray-300"></span>-->
  <!--  <span class="border-white"></span>-->
</template>

<script>
export default {
  name: 'vx-stepper',
  props: {
    steps: {
      type: Array,
      default: () => [
        {
          id: 'Step 1',
          name: 'Select date and time',
          href: '#',
          status: 'completed',
        },
        { id: 'Step 2', name: 'Fill details', href: '#', status: 'current' },
        {
          id: 'Step 3',
          name: 'Review & Payment',
          href: '#',
          status: 'upcoming',
        },
      ],
    },
    completedColor: {
      type: String,
      default: 'blue',
    },
    currentColor: {
      type: String,
      default: 'blue',
    },
    upcomingColor: {
      type: String,
      default: 'gray',
    },
  },
  methods: {
    getColor(status) {
      if (status === 'completed') {
        return this.completedColor
      } else if (status === 'current') {
        return this.currentColor
      } else {
        return this.upcomingColor
      }
    },
  },
}
</script>

<style scoped></style>
