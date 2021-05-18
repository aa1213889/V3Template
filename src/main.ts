import { createApp } from 'vue'
import App from './App.vue'
import axios from './utils/axios'
import setupAntd from './utils/antd'

const app = createApp(App)

/**axios */
app.provide('axios', axios)

/**antd */
setupAntd(app)

app.mount('#app')
