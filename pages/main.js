import Vue from 'vue'
import App from './App'

// 导入XFormEditor
import XPageEditor from '../src/index'
Vue.use(XPageEditor)

// Vue 全局配置
Vue.config.productionTip = false;

/* eslint-disable no-new */
// 启动应用
new Vue({
  render: h => h(App)
}).$mount('#app')
