<template>
  <TransitionRoot
    appear
    :show="isOpen"
    as="template"
  >
    <Dialog
      as="div"
      :open="isOpen"
      @close="setIsOpen"
      class="relative z-10"
    >
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:text-gray-100 dark:bg-gray-800"
              :class="[width, { '!overflow-visible': allowOverflow }]"
            >
              <DialogTitle
                v-if="$slots.title"
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900 mb-4 dark:text-gray-100 flex"
              >
                <slot name="title"></slot>
                <div class="grow"></div>
                <slot name="header-action"></slot>
              </DialogTitle>
              <DialogDescription>
                <div class="text-sm text-gray-500">
                  <slot>This is the default slot content</slot>
                </div>
              </DialogDescription>

              <div
                v-if="$slots.actions"
                class="mt-4"
              >
                <div class="w-full flex justify-end gap-4">
                  <slot
                    name="actions"
                    :close="closeModal"
                  >
                    <button
                      class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      @click="closeModal"
                    >
                      Deactivate
                    </button>
                  </slot>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <slot
    name="activator"
    :open="openModal"
  >
    <!--    <vx-button @click="openModal">Open Dialog</vx-button>-->
  </slot>
</template>

<script>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue'
import VxButton from '../button/vx-button.vue'
export default {
  name: 'vx-dialog',
  components: {
    VxButton,
    Dialog,
    DialogPanel,
    DialogTitle,
    DialogDescription,
    TransitionRoot,
    TransitionChild,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: 'max-w-md',
    },
    allowOverflow: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    open: function (value) {
      this.setIsOpen(value)
    },
  },
  mounted() {
    this.setIsOpen(this.open)
  },
  emits: ['modal-opened', 'modal-closed', 'update:open'],
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    setIsOpen(value) {
      this.isOpen = value

      this.$emit('update:open', value)

      if (value === false) {
        this.$emit('modal-closed')
      } else {
        this.$emit('modal-opened')
      }
    },
    openModal() {
      this.setIsOpen(true)
    },
    closeModal() {
      this.setIsOpen(false)
    },
  },
}
</script>

<style scoped></style>
