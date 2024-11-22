// vue 默认引入的样式，可以去掉
// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// 引入初始化样式文件
import '@/styles/common.scss'
// 创建pinia
const pinia = createPinia()

const app = createApp(App)

// 安装路由器
app.use(router)
// 使用pinia
app.use(pinia)
// 挂载应用
app.mount('#app')