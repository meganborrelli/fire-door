import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
  // @ts-ignore
import VueQrcodeReader from "vue3-qrcode-reader";

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(VueQrcodeReader)
app.use(createPinia())
app.use(router)

app.mount('#app')
