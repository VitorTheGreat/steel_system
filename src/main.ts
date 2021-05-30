import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

//styles
import "@/assets/vendor/nucleo/css/nucleo.css";
import "@/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import '@/assets/scss/argon/argon.scss'
import '@/assets/scss/main.scss'

createApp(App).use(store).use(router).mount('#app')
