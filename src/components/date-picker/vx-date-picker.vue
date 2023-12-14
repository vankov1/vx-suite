<template>
  <div class="dark:bg-gray-800">
    <div
      class="block text-sm font-medium text-gray-700 dark:text-gray-100 h-5"
      v-html="label"
    ></div>
    <VueDatePicker
      class="vx-booking-calendar"
      v-model="date"
      :range="range"
      :enable-time-picker="enableTimePicker"
      :inline="inline"
      :auto-apply="true"
      :year-range="yearRange"
      :format="formatString"
      v-bind="$attrs"
    >
      <template #day="{ day, date }">
        <slot
          name="day"
          :day="day"
          :date="date"
        >
          {{ day }}
        </slot>
      </template>
    </VueDatePicker>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { forEach } from 'lodash'

export default {
  name: 'vx-date-picker',
  components: {
    VueDatePicker,
  },
  props: {
    modelValue: {
      type: [String, Array, Date],
      default: null,
    },
    range: {
      type: Boolean,
      default: false,
    },
    enableTimePicker: {
      type: Boolean,
      default: false,
    },
    colorScheme: {
      type: Object,
      default: () => {
        return {
          primary: '#1059D2',
          secondary: '#e8eefa',
        }
      },
    },
    inline: {
      type: Boolean,
      default: false,
    },
    yearRange: {
      type: Array,
      default: () => {
        return [new Date().getFullYear(), new Date().getFullYear() + 1]
      },
    },
    label: {
      type: String,
      default: '',
    },
  },
  computed: {
    formatString() {
      if (this.range) {
        if (this.enableTimePicker) {
          return 'dd/MM/yyyy HH:mm - dd/MM/yyyy HH:mm'
        }

        return 'dd/MM/yyyy - dd/MM/yyyy HH:mm'
      }

      if (this.enableTimePicker) {
        return 'dd/MM/yyyy HH:mm'
      }

      return 'dd/MM/yyyy'
    },
  },
  data() {
    return {
      date: null,
    }
  },
  watch: {
    date: function (val) {
      this.$emit('update:modelValue', val)
    },
  },
  created() {
    if (this.modelValue) {
      this.date = this.modelValue
    }
  },
}
</script>

<style>
.vx-booking-calendar {
  --primary-color: v-bind(colorScheme [ 'primary' ]);
  --secondary-color: v-bind(colorScheme [ 'secondary' ]);
}

.time-wrapper {
  max-height: 410px;
  overflow: hidden scroll;
}

.dp__main {
  display: flex;
  //justify-content: center;
}

.time-button {
  font-weight: 900;
  border: 1px solid #5c6bc0;
  height: 46px !important;
}

.time-button.selected {
  background-color: white;
}

.dp__calendar_header_item {
  font-weight: normal;
  font-size: 12px;
  line-height: 35px;
  color: #8f8f8f;
  @apply dark:bg-gray-800;
}

.dp__theme_light {
  --dp-menu-border-color: #fff;
  --dp-border-color: #fff;
  --dp-hover-color: rgba(17, 89, 210, 0.75);
  --dp-hover-text-color: #fff;
  @apply dark:bg-gray-800 dark:border-0;
}

.dp__calendar_item {
  --dp-text-color: var(--primary-color);
}

.dp__cell_inner {
  background: #e8eefa;
  margin: 2px;
  @apply dark:bg-gray-800;
}

.dp__active_date {
  background: var(--primary-color);
  color: #fff;
}

.dp__cell_disabled {
  background: #fff;
  color: #ccc;
}

.dp__menu {
  font-size: 0.9rem;
}

.dp__month_year_select {
  @apply dark:bg-gray-800 dark:text-gray-300;
}

.dp__input {
  @apply bg-white text-gray-600 border sm:leading-5 dark:placeholder-gray-600 dark:focus:border-gray-600 dark:focus:placeholder-gray-600 dark:focus:outline-none dark:ring-0 dark:ring-gray-600 dark:ring-opacity-50 dark:disabled:bg-gray-800 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-600 dark:disabled:opacity-50 dark:disabled:cursor-not-allowed border-solid mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 h-9;
}
</style>
