<template>
  <Listbox as="div"
     :modelValue="modelValue"
     @update:modelValue="updateValue"
     :by="itemValue"
  >
    <ListboxLabel class="block text-sm font-medium text-gray-700" v-if="label">{{ label }}</ListboxLabel>
    <div class="relative mt-1">
      <ListboxButton class="min-h-[38px] relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
        <span class="block truncate">{{ selected ? selected[itemTitle] : '' }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="item in items" :key="item" :value="item" v-slot="{ active, selected }">
            <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-8 pr-4']">
              <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ item[itemTitle] }}</span>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 left-0 flex items-center pl-1.5']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script>
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

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
  },
  props: {
    label: {
      type: String,
      default: null,
    },
    defaultValue: {
      type: Object,
      default: null,
    },
    items: {
      type: Array,
      default: () => [],
    },
    itemTitle: {
      type: String,
      default: 'title',
    },
    itemValue: {
      type: String,
      default: 'value',
    },
    itemSubtitle: {
      type: String,
      default: null,
    },
    modelValue: {
      type: [String, Number, Object],
      default: null,
    },
    returnObject: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selected: this.modelValue,
    }
  },
  methods: {
    updateValue(value) {
      // This is not working as expected, refactor at some point so it works like vuetify
      if (this.returnObject) {
        this.selected = this.items.find((item) => item[this.itemValue] === value)
      } else {
        this.selected = value
      }

      this.$emit('update:modelValue', this.selected)
      this.$emit('change', this.selected)
    },
  },
}

</script>
