<template>
  <div class="mt-2 bg-white dark:bg-gray-800">
    <label
      :for="id"
      class="block text-sm font-medium text-gray-700 dark:text-gray-100 h-5"
      v-if="label"
    >
      {{ label }}
    </label>
    <div class="flex h-11">
      <div class="relative flex-1">
        <input
          :id="id"
          type="text"
          class="border-solid mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 text-center"
          :name="name"
          :placeholder="placeholder"
          v-bind="{ ...$props, ...$attrs }"
          @blur="onBlurInteger"
          :value="priceInteger"
        />
      </div>
      <div class="h-full mx-2 flex col items-end font-bold">.</div>
      <div class="flex-1">
        <input
          type="text"
          class="border-solid mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 text-center appearance-none"
          :name="name"
          :placeholder="placeholder"
          v-bind="{ ...$props, ...$attrs }"
          @blur="onBlurDecimal"
          :value="priceDecimal"
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
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import VxIconWithTooltip from '../icon-with-tooltip/vx-icon-with-tooltip.vue'

export default defineComponent({
  name: 'vx-price-field',
  components: { VxIconWithTooltip, VxTextField },
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
    placeholder: {
      type: String,
      default: '',
    },
  },
  // watch: {
  //   // modelValue: {
  //   //   handler(newValue) {
  //   //     if (newValue) {
  //   //       this.priceInteger = newValue.toString().slice(0, -2)
  //   //       this.priceDecimal = newValue.toString().slice(-2)
  //   //     }
  //   //   },
  //   //   immediate: true,
  //   // },
  //   priceInteger(newValue) {
  //     this.priceInteger = newValue
  //     console.log(this.priceInteger + '' + this.priceDecimal)
  //     this.$emit('update:modelValue', newValue + '' + this.priceDecimal)
  //   },
  //   priceDecimal(newValue) {
  //     // add leading zero if needed
  //     console.log('Decimal value', newValue)
  //     console.log('Decimal length', newValue.length)
  //     if (newValue.length === 1) {
  //       console.log('add leading zero')
  //       this.priceDecimal = '0' + newValue
  //     }
  //
  //     // range between 0 and 99
  //     if (newValue > 99) {
  //       this.priceDecimal = '99'
  //     }
  //
  //     console.log(this.priceInteger + '' + this.priceDecimal)
  //     this.$emit(
  //       'update:modelValue',
  //       this.priceInteger + '' + this.priceDecimal
  //     )
  //   },
  // },
  created() {
    if (this.modelValue) {
      this.priceInteger = this.modelValue.toString().slice(0, -2)
      this.priceDecimal = this.modelValue.toString().slice(-2)
    }
  },
  data() {
    return {
      priceInteger: 0,
      priceDecimal: 0,
    }
  },
  methods: {
    onBlurInteger(v) {
      this.priceInteger = v.srcElement.value
      // can not be negative or NaN
      if (this.priceInteger <= 0 || isNaN(this.priceInteger)) {
        this.priceInteger = 0
      }

      if (this.priceInteger === '') {
        this.priceInteger = 0
      }

      // make sure decimal is not empty
      if (this.priceDecimal === '') {
        this.priceDecimal = '00'
      }

      console.log('decimal', this.priceDecimal)
      // add leading zero if needed for decimal
      if (this.priceDecimal.length === 1) {
        this.priceDecimal = '0' + this.priceDecimal
      }

      // make sure decimal is always two digits
      if (
        this.priceDecimal.length === 0 ||
        this.priceDecimal === '0' ||
        this.priceDecimal === 0
      ) {
        this.priceDecimal = '00'
      }
      console.log('decimal', this.priceDecimal)
      this.updateValue()
    },
    onBlurDecimal(v) {
      this.priceDecimal = v.srcElement.value
      // can not be negative or NaN
      if (this.priceDecimal <= 0 || isNaN(this.priceDecimal)) {
        this.priceDecimal = '00'
      }

      if (this.priceDecimal === '') {
        this.priceDecimal = '00'
      }

      // add leading zero if needed
      if (this.priceDecimal.length === 1) {
        this.priceDecimal = '0' + this.priceDecimal
      }

      // range between 0 and 99
      if (this.priceDecimal > 99) {
        this.priceDecimal = '99'
      }

      // No more than two decimal places
      if (this.priceDecimal.length > 2) {
        this.priceDecimal = this.priceDecimal.slice(0, 2)
      }

      // allow only numbers in the field and remove anything else
      this.priceDecimal = this.priceDecimal.replace(/[^0-9]/g, '')

      this.updateValue()
    },
    updateValue() {
      this.$emit(
        'update:modelValue',
        this.priceInteger + '' + this.priceDecimal
      )
    },
  },
})
</script>

<style scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  @apply appearance-none;
}
</style>
