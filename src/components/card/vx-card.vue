<template>
  <div
    class="sm:mt-4 shadow sm:rounded-md self-start bg-white dark:bg-gray-800"
  >
    <div
      :class="[
        onlyHeader ? 'rounded-b-md' : '',
        noHeaderDivider ? '' : 'border-b border-gray-200 dark:border-gray-700',
      ]"
      class="px-4 py-5 sm:px-6 rounded-t-md"
      v-if="$slots.title"
    >
      <div
        class="flex flex-wrap items-center justify-between sm:flex-nowrap"
        :class="{
          '-ml-4 -mt-2 ': !onlyHeader,
        }"
      >
        <div class="">
          <h3
            class="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100"
          >
            <slot name="title">Title</slot>
          </h3>
          <p
            v-if="$slots.subtitle"
            class="text-gray-500 text-sm"
          >
            <slot name="subtitle">Subtitle</slot>
          </p>
        </div>
        <div
          class="ml-4 flex-shrink-0"
          v-if="$slots.headerAction"
        >
          <slot name="headerAction">
            <button
              type="button"
              class="rounded-t relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              PLACEHOLDER
            </button>
          </slot>
        </div>
      </div>
    </div>
    <div
      :class="[contentClasses, contentClass]"
      class="px-4 py-5 sm:p-6 dark:text-gray-100"
      v-if="!onlyHeader"
    >
      <slot></slot>
    </div>
    <div
      class="bg-gray-50 px-4 py-3 text-right sm:px-6 flex justify-end rounded-b-md dark:text-gray-100"
      v-if="$slots.actions"
    >
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vx-card',
  props: {
    contentClass: {
      type: String,
      default: '',
    },
    noContentPadding: {
      type: Boolean,
      default: false,
    },
    onlyHeader: {
      type: Boolean,
      default: false,
    },
    noHeaderDivider: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    contentClasses() {
      return {
        'px-4 py-5 sm:p-6': true,
        'rounded-t-none': !!this.$slots.title,
        'rounded-b-none': !!this.$slots.actions,
        'rounded-md': !(!!this.$slots.title && !!this.$slots.actions),
        '!p-0': this.noContentPadding,
      }
    },
  },
}
</script>

<style scoped></style>
