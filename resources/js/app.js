import { createApp } from 'vue'
import App from '@/components/App.vue'

import '../css/app.css'; 

const app = createApp(App)

import router from './router'
app.use(router);

import store from '@/store/index.js';
app.use(store);

app.mount('#app')