import '@/ui/assets/styles/index.scss'
import { createApp } from 'vue'
import App from '@/ui/views/app/App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
