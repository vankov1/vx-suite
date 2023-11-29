//Load app.vue and display it

import { createApp } from 'vue'
import App from './App.vue'
import vuetify from '../plugins/Vuetify/vuetify'

let app = createApp(App)
app.use(vuetify)
app.mount('#app')
