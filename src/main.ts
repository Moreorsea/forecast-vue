import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import locales from './locales'

i18next.init({
  lng: 'ru',
  interpolation: {
    escapeValue: false
  },
  fallbackLng: false,
  resources: {
    en: { translation: locales.en },
    ru: { translation: locales.ru }
  }
})

const app = createApp(App)

app.use(I18NextVue, { i18next })
app.use(createPinia())

app.mount('#app')
