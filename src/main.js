import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App).mount('#app')
app.component('VxCard', import('./Elements/vx-card.vue').default)
