// plugins/vuetify.js
import 'vuetify/styles'
import './vuetify.scss'
import { createVuetify } from 'vuetify'
import {VBtn, VTextField} from "vuetify/components";

const vuetify = createVuetify({
  aliases: {
    VPrimaryButton: VBtn,
    VSecondaryButton: VBtn,
    VxInputField: VTextField,
  },
  defaults: {
    VBtn: {
      color: '#FFDF5A',
      flat: true,
      rounded: true,
    },
    VSelect: {
      variant: 'outlined',
      density: 'compact',
    },
    VPrimaryButton: {
      class: 'vx-primary-button',
      color: '#FFDF5A',
      flat: true,
      rounded: true,
    },
    VSecondaryButton: {
      class: 'vx-secondary-button',
      color: '#FFFFFF',
      flat: true,
      rounded: true,
      border: true,
    },
    VxInputField: {
      variant: 'outlined',
      density: 'compact',
    }
  },
})
export default vuetify
