<template>
  <RadioGroup v-model="item">
    <RadioGroupLabel class="text-base font-medium text-gray-900" v-if="label">{{ label }}</RadioGroupLabel>

    <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
      <RadioGroupOption as="template" v-for="item in items" :key="item" :value="item" v-slot="{ checked, active }">
        <div :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'border-indigo-500 ring-2 ring-indigo-500' : '', 'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none']">
          <span class="flex flex-1">
            <span class="flex flex-col">
              <RadioGroupLabel as="span" class="block text-sm font-medium text-gray-900">{{ item.title }}</RadioGroupLabel>
              <RadioGroupDescription as="span" class="mt-1 flex items-center text-sm text-gray-500" v-if="item.description">{{ item.description }}</RadioGroupDescription>
              <RadioGroupDescription as="span" class="mt-6 text-sm font-medium text-gray-900" v-if="item.accent">{{ item.accent }}</RadioGroupDescription>
            </span>
          </span>
          <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-indigo-600']" aria-hidden="true" />
          <span :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg']" aria-hidden="true" />
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script>
import {RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption} from "@headlessui/vue";
import {CheckCircleIcon} from "@heroicons/vue/20/solid";
import {ref} from "vue";
export default {
  name: "card-radio-group",
  components: {RadioGroupDescription, RadioGroupOption, RadioGroupLabel, RadioGroup, CheckCircleIcon},
  props: {
    label: {
      type: String,
      required: false,
    },
    items: {
      type: Array,
      required: true,
    },
    defaultValue: {
      type: Object,
      required: false,
    },
    itemValue: {
      type: String,
      required: false,
      default: 'value',
    },
    returnObject: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  data() {
    return {
      item: this.defaultValue ?? this.items[0],
    }
  },
  watch: {
    item: function (val) {
      this.$emit('input', this.returnObject ? val : val[this.itemValue]);
    }
  }
}
</script>

<style scoped>

</style>
