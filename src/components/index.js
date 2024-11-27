// 把components中的所组件都进行全局化注册
// 通过插件的方式

import Detail from "./Detail.vue";
import XtxSku from '@/components/XtxSku/index.vue'

export const componentsPlugin = {
  install(app) {
    app.component("Detail", Detail);
    app.component("XtxSku", XtxSku);
  }
}