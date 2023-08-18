<template>
  <div
    ref="target"
    class="absolute top-10"
  ></div>
  <TransitionRoot
    as="template"
    :show="isVisibleEl"
    :enter="`transition-all ease-in-out duration-500 delay-[${delay}ms]`"
    :enterFrom="`opacity-0 ${
      direction === 'up' ? 'translate-y-8' : 'translate-y-0'
    } `"
    enterTo="opacity-100 translate-y-0"
    leave="transition-all ease-in-out duration-300"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <slot />
  </TransitionRoot>
  <!-- <div class="delay-[2000ms] delay-[100ms] delay-[200ms] delay-[300ms] delay-[400ms] delay-[500ms] delay-[600ms] delay-[1000ms]"></div> -->
</template>
<script>
import { defineComponent } from 'vue'
import { TransitionRoot } from '@headlessui/vue'
import { ref } from 'vue'
import { useElementVisibility } from '@vueuse/core'

export default defineComponent({
  name: 'FadeInUp',
  components: { TransitionRoot },
  setup() {
    const target = ref(null)
    const targetIsVisible = useElementVisibility(target)

    return {
      target,
      targetIsVisible,
    }
  },
  props: {
    delay: {
      type: Number,
      default: 0,
    },
    direction: {
      type: String,
      default: 'up',
    },
    endless: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isVisibleEl() {
      let isVisible =
        this.endless || this.animationCount === 0 ? this.targetIsVisible : true
      if (!isVisible) {
        this.animationCount++
      }
      return isVisible
    },
  },
  data() {
    return {
      isVisible: true,
      animationCount: 0,
    }
  },
})
</script>
<style scoped></style>
