// vue 默认引入的样式，可以去掉
// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'

// 测试接口
import { getCategoryAPI } from '@/apis/testAPI'
getCategoryAPI().then(res => {
  console.log(res)
})

const app = createApp(App)

// 安装路由器
app.use(router)
// 挂载应用
app.mount('#app')