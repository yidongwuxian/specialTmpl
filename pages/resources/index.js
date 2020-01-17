/**
 *
 *
 * 自定义组件
 */

import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

// 导入自定义组件
import CustomInput from './components/Input.vue'

// 注册ElementUI
Vue.use(ElementUI, { locale })

// 遍历组件数据
let iviewComponentList = {}
Object.keys(ElementUI).map(key => {
  let item = ElementUI[key]
  if (typeof item === 'object' && item instanceof Object) {
    iviewComponentList[key] = item
  }
})
// 合并
let componentList = Object.assign({}, {CustomInput}, iviewComponentList)

export default componentList
