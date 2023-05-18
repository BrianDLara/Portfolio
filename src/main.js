import { createApp } from 'vue'
import './assets/index.css'
import 'remixicon/fonts/remixicon.css'
import 'devicon'

import App from './App.vue'
import router from './router'

// Import and use Vue Gtag
import VueGtag from 'vue-gtag'

const app = createApp(App)

app.use(
  VueGtag,
  {
    // Config options
    config: { id: 'G-LWRB4YYVPN' } // Replace with your Google Analytics Tracking ID
  },
  router
)

app.use(router).mount('#app')
