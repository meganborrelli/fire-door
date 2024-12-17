import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from "vuetify/iconsets/mdi";
  // @ts-ignore
import VueQrcodeReader from "vue3-qrcode-reader";

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
    theme: {
        defaultTheme: "dark",
    },
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
        },
    },
    components,
    directives,
});
const app = createApp(App)
app.use(VueQrcodeReader)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
