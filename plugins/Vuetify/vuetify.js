// import '../../src/settings.scss'
// import 'vuetify/styles' // This imports everything
import { createVuetify } from 'vuetify'
import { VBtn, VTextField, VCombobox } from 'vuetify/components'

const vuetify = createVuetify({
  aliases: {
    VPrimaryButton: VBtn,
    VSecondaryButton: VBtn,
    VxInputField: VTextField,
    VCombobox: VCombobox,
    VBtn: VBtn,
  },
  defaults: {
    VBtn: {
      color: '#FFDF5A',
      flat: true,
      rounded: true,
    },
    VCombobox: {
      variant: 'outlined',
      density: 'compact',
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
    },
  },
})
export default vuetify
