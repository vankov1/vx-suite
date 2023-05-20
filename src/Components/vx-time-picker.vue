<template>
<!--  <v-menu-->
<!--    ref="menu"-->
<!--    v-model="timeMenu"-->
<!--    :close-on-content-click="false"-->
<!--    :nudge-right="40"-->
<!--    :return-value.sync="time"-->
<!--    transition="scale-transition"-->
<!--    offset-y-->
<!--    max-width="290px"-->
<!--    min-width="290px"-->
<!--  >-->
<!--    <template v-slot:activator="{ on, attrs }">-->
<!--      <v-text-field-->
<!--        v-model="time"-->
<!--        :label="label"-->
<!--        :hint="hint"-->
<!--        prepend-icon="mdi-clock-time-four-outline"-->
<!--        readonly-->
<!--        v-bind="attrs"-->
<!--        v-on="on"-->
<!--        outlined-->
<!--        dense-->
<!--        :error-messages="errorsStore.hasError('event.time')"-->
<!--        @change="inputChange"-->
<!--      ></v-text-field>-->
<!--    </template>-->
<!--    <v-time-picker-->
<!--      v-if="timeMenu"-->
<!--      v-model="time"-->
<!--      full-width-->
<!--      format="24hr"-->
<!--      @click:minute="$refs.menu.save(time)"-->
<!--    ></v-time-picker>-->
<!--  </v-menu>-->
</template>

<script>
import useErrorsStore from '../../store/errors'

export default {
  name: 'VxTimePicker',
  setup() {
    const errorsStore = useErrorsStore()
    return {
      errorsStore,
    }
  },
  props: {
    label: {
      type: String,
      default: 'Show start',
    },
    hint: {
      type: String,
      default: '',
    },
    initialValue: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      timeMenu: false,
      time: null,
    }
  },
  created() {
    this.time = this.initialValue
  },
  methods: {
    inputChange() {
      this.$emit('input', this.time)
    },
  },
}
</script>

<style scoped></style>
