import { createApp } from 'vue'
import './assets/index.css'
import 'remixicon/fonts/remixicon.css'
import 'devicon'

import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
