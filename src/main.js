import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

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