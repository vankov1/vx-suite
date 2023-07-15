<template>
  <div>
    <v-menu
      v-model="showMenu"
      absolute
      offset-y
      style="max-width: 600px"
    >
      <template v-slot:activator="{ on }">
        <div>
          <v-btn
            icon
            x-large
            v-on="on"
          >
            <v-avatar
              :color="color"
              size="24"
            >
              <span class="white--text text-h5"></span>
            </v-avatar>
          </v-btn>
          <span>{{ label }}</span>
        </div>
      </template>

      <v-color-picker
        value="color"
        elevation="15"
        @update:color="colorUpdated"
      ></v-color-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "SwatchWithPicker",
  props: {
    color: {
      type: String,
      default: '#000',
    },
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    colorUpdated(v) {
      console.log(v)
      this.$emit('color-updated', v.hex)
    }
  },
}
</script>

<style scoped>

</style>
