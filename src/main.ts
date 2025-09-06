import './assets/base.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import './assets/main.css'
import './assets/logo.svg'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

import id from './locales/id.json' assert { type: 'json' }
import en from './locales/en.json' assert { type: 'json' }

import { createI18n } from 'vue-i18n'

// Buat instance i18n
const i18n = createI18n({
  legacy: false, // Wajib untuk Composition API
  fallbackLocale: 'en', // Bahasa cadangan
  messages: {
    id,
    en,
  },
  locale: navigator.language.split('-')[0] || 'id',
})

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(i18n)
app.mount('#app')

AOS.init({
  once: false,
  duration: 800,
})
