<template>
  <div>
    <v-btn>I'm gettin tired</v-btn>
    <v-combobox
      clearable
      chips
      multiple
      label="Combobox"
      :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]"
      color="green"
      :focused="true"
      :active="true"
      :menu-props="{ modelValue: true }"
    ></v-combobox>
  </div>
</template>

<script>
export default {
  name: 'App.vue',
}
</script>

<style scoped></style>
