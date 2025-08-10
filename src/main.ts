import "./assets/base.css";
import "aos/dist/aos.css";
import "./assets/main.css";

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.mount('#app');
