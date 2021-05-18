import 'ant-design-vue/dist/antd.css'
import { App } from 'vue'
import { Button, message } from 'ant-design-vue'

const components = [Button]

const setupAntd = (app: App): void => {
  app.provide('message', message)
  components.forEach((plugin: any) => {
    app.use(plugin)
  })
}

export default setupAntd
