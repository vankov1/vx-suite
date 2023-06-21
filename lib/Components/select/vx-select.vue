<template>
  <Listbox
    as="div"
    v-model="internalValue"
  >
    <ListboxLabel
      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
      v-if="label"
    >
      {{ label }}
    </ListboxLabel>
    <ListboxLabel
      class="text-sm text-gray-500 dark:text-gray-400"
      v-if="description"
    >
      {{ description }}
    </ListboxLabel>
    <div class="relative mt-1">
      <ListboxButton
        class="min-h-[38px] relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:focus:ring-gray-500 dark:focus:border-gray-700"
      >
        <span
          class="block truncate"
          v-if="internalValueIsSet"
        >
          <template v-if="chips">
            <template v-if="multiple">
              <vx-badge
                :color="chipsColor"
                v-for="(item, index) in internalValue"
                class="mr-1 pr-1"
              >
                {{ item ? item[itemTitle] ?? item : '' }}
                <XCircleIcon
                  @click.stop="removeItem(index)"
                  class="h-4 w-4 ml-1 cursor-pointer"
                ></XCircleIcon>
              </vx-badge>
            </template>
            <template v-else>
              <vx-badge :color="chipsColor">{{
                internalValue ? internalValue[itemTitle] ?? internalValue : ''
              }}</vx-badge>
            </template>
          </template>
          <template v-else>
            <slot
              name="selected"
              :value="internalValue"
              >{{
                internalValue ? internalValue[itemTitle] ?? internalValue : ''
              }}</slot
            >
          </template>
        </span>
        <span
          v-else
          class="block truncate text-gray-400 dark:text-gray-500"
        >
          {{ placeholder }}
        </span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <ChevronUpDownIcon
            class="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            as="template"
            v-for="(item, index) in items"
            :key="index"
            :value="item"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-8 pr-4',
              ]"
            >
              <span
                :class="[
                  selected ? 'font-semibold' : 'font-normal',
                  'block truncate',
                ]"
              >
                {{ item[itemTitle] ?? item }}
              </span>

              <span
                v-if="selected"
                :class="[
                  active ? 'text-white' : 'text-indigo-600',
                  'absolute inset-y-0 left-0 flex items-center pl-1.5',
                ]"
              >
                <CheckIcon
                  class="h-5 w-5"
                  aria-hidden="true"
                />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import {
  CheckIcon,
  ChevronUpDownIcon,
  XCircleIcon,
} from '@heroicons/vue/20/solid'
import VxBadge from '../badge'
export default {
  name: 'vx-select',
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    ChevronUpDownIcon,
    XCircleIcon,
    VxBadge,
  },
  props: {
    label: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    items: {
      type: [Array, Object],
      default: () => [],
    },
    itemTitle: {
      type: String,
      default: 'title',
    },
    itemSubtitle: {
      type: String,
      default: null,
    },
    modelValue: {
      type: [String, Number, Object],
      default: null,
    },
    chips: {
      type: Boolean,
      default: false,
    },
    chipsColor: {
      type: String,
      default: 'primary',
    },
    placeholder: {
      type: String,
      default: 'Select an option',
    },
  },
  computed: {
    multiple() {
      return this.$attrs.hasOwnProperty('multiple')
    },
    internalValue: {
      get() {
        if (this.multiple && this.modelValue === null) {
          return []
        }

        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },
    internalValueIsSet() {
      console.log(typeof this.internalValue)
      return (
        this.internalValue !== null &&
        this.internalValue !== undefined &&
        this.internalValue !== '' &&
        (typeof this.internalValue === 'object'
          ? Object.keys(this.internalValue).length > 0
          : true)
      )
    },
  },
  methods: {
    removeItem(index) {
      this.internalValue.splice(index, 1)
    },
  },
  // data() {
  //   return {
  //     selected: null,
  //   }
  // },
  // methods: {
  //   updateValue(value) {
  //     this.selected = value
  //     this.$emit('update:modelValue', this.selected)
  //     this.$emit('change', this.selected)
  //   },
  // },
}
</script>
