import { createApp } from 'vue'
import App from './App.vue'
import "./index.scss"
import router from './router'
import { store } from './store/store.ts'

createApp(App).use(router).use(store).mount('#app')
