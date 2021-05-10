import { createApp } from 'vue'
import App from './App.vue'
import axios from './utils/axios'
import 'ant-design-vue/dist/antd.css'
import { Button, message } from 'ant-design-vue'

const app = createApp(App)

/**axios */
app.provide('axios', axios)

/**antd */
app.use(Button)
app.provide('message', message)

app.mount('#app')
