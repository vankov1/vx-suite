<template>
  <Combobox as="div" v-model="selectedItem">
    <ComboboxLabel class="block text-sm font-medium text-gray-700">{{ label }}</ComboboxLabel>
    <div class="relative mt-1">
      <ComboboxInput class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" @change="query = $event.target.value" :display-value="(item) => item?.name" />
      <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
        <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </ComboboxButton>

      <ComboboxOptions v-if="filteredItems.length > 0" class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
        <ComboboxOption v-for="item in filteredItems" :key="item.id" :value="item" as="template" v-slot="{ active, selected }">
          <li :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-indigo-600 text-white' : 'text-gray-900']">
            <div class="flex">
              <span :class="['truncate', selected && 'font-semibold']">
                {{ item[itemTitle] }}
              </span>
              <span :class="['ml-2 truncate text-gray-500', active ? 'text-indigo-200' : 'text-gray-500']" v-if="itemSubtitle">
                {{ item[itemSubtitle] }}
              </span>
            </div>

            <span v-if="selected" :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-indigo-600']">
              <CheckIcon class="h-5 w-5" aria-hidden="true" />
            </span>
          </li>
        </ComboboxOption>
      </ComboboxOptions>
    </div>
  </Combobox>
</template>

<script>
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue'
export default {
  name: "vx-autocomplete",
  components: {
    CheckIcon,
    ChevronUpDownIcon,
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxLabel,
    ComboboxOption,
    ComboboxOptions,
  },
  props: {
    label: {
      type: String,
      default: null,
    },
    value: {
      type: String,
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
      default: 'id',
    },
    itemSubtitle: {
      type: String,
      default: null,
    },
  },
  computed: {
    filteredItems() {
      if (this.query === '') {
        return this.items
      }
      return this.items.filter((person) => {
        return person[this.itemTitle].toLowerCase().includes(this.query.toLowerCase())
      })
    }
  },
  data() {
    return {
      selectedItem: null,
      query: '',
    }
  },
}

</script>
