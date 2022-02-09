import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
// import '@fortawesome/fontawesome-free/js/all.js'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/'

createApp(App).use(store).use(router, axios).mount('#app')
