<template>
  <RadioGroup
    v-model="item"
    :disabled="disabled"
    :class="[disabled ? 'opacity-50' : '']"
  >
    <RadioGroupLabel
      class="text-base font-medium text-gray-900 dark:text-gray-100"
      v-if="label"
    >
      {{ label }}
    </RadioGroupLabel>
    <RadioGroupDescription
      class="text-sm text-gray-500 dark:text-gray-400"
      v-if="description"
    >
      {{ description }}
    </RadioGroupDescription>

    <!--    <div class="gap-y-6 gap-y-2"></div>-->
    <div
      class="mt-4 grid sm:gap-x-4"
      :class="gridClasses"
    >
      <RadioGroupOption
        as="template"
        v-for="item in localItems"
        :key="item"
        :value="item"
        v-slot="{ checked, active }"
      >
        <div
          class="dark:bg-gray-900"
          :class="[
            checked
              ? 'border-transparent'
              : 'border-gray-300 dark:border-gray-700',
            active ? 'border-indigo-500 ring-2 ring-indigo-500' : '',
            'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none',
          ]"
        >
          <span class="flex flex-1">
            <span class="flex flex-col">
              <RadioGroupLabel
                as="span"
                class="block text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                <slot
                  name="title"
                  :item="item"
                >
                  {{ item.title }}
                </slot>
              </RadioGroupLabel>
              <RadioGroupDescription
                as="span"
                class="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-300"
                v-if="item.description"
              >
                <slot
                  name="description"
                  :item="item"
                >
                  {{ item.description }}
                </slot>
              </RadioGroupDescription>
              <RadioGroupDescription
                as="span"
                class="mt-6 text-sm font-medium text-gray-900 dark:text-gray-100"
                v-if="item.accent"
              >
                <slot
                  name="accent"
                  :item="item"
                >
                  {{ item.accent }}
                </slot>
              </RadioGroupDescription>
            </span>
          </span>
          <CheckCircleIcon
            :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-indigo-600']"
            aria-hidden="true"
          />
          <span
            :class="[
              active ? 'border' : 'border-2',
              checked ? 'border-indigo-500' : 'border-transparent',
              'pointer-events-none absolute -inset-px rounded-lg',
            ]"
            aria-hidden="true"
          />
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script>
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from '@headlessui/vue'
import { CheckCircleIcon } from '@heroicons/vue/20/solid'
import { ref } from 'vue'
export default {
  name: 'vx-radio-group',
  components: {
    RadioGroupDescription,
    RadioGroupOption,
    RadioGroupLabel,
    RadioGroup,
    CheckCircleIcon,
  },
  props: {
    type: {
      type: String,
      required: false,
      default: 'radio',
    },
    label: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    items: {
      type: Array,
      required: false,
    },
    defaultValue: {
      type: [String, Object, Number],
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
    },
    verticalList: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    gridClasses() {
      return this.verticalList
        ? 'grid-cols-1 gap-y-2'
        : 'grid-cols-1 gap-y-6 sm:grid-cols-3'
    },
  },
  data() {
    return {
      item: null,
    }
  },
  watch: {
    item: function (val) {
      if (!val) {
        return
      }
      this.$emit('input', this.returnObject ? val : val[this.itemValue])
    },
  },
  created() {
    if (this.type === 'yes-no') {
      this.localItems = [
        { title: 'Yes', value: 1 },
        { title: 'No', value: 0 },
      ]
    } else {
      this.localItems = this.items
    }

    if (typeof this.defaultValue !== 'undefined') {
      this.item = this.localItems.find(
        (i) => i[this.itemValue] === this.defaultValue
      )
    }
  },
}
</script>

<style scoped></style>
