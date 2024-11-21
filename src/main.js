import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// 测试接口
import { getCategoryAPI } from '@/apis/testAPI'
getCategoryAPI().then(res => {
  console.log(res)
})

createApp(App).mount('#app')

