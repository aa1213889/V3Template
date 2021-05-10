/**解决 找不到模块“xxx.vue”或其相应的类型声明问题 */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
