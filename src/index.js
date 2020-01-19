import {
  Button,
  Dialog,
  Icon,
  Input,
  InputNumber,
  RadioGroup,
  Radio,
  Select,
  Option,
  Upload,
  ColorPicker,
  Image,
  Carousel,
  CarouselItem,
  Loading,
  MessageBox,
  Message,
  Backtop,
  Collapse,
  CollapseItem,
  Form,
  FormItem,
  Switch
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import XPageEditor from './components/Index.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/dist/css/swiper.css'

const XPE = {}
const prefix = 'XUI'

XPE.installed = false
XPE.install = function (Vue) {
  if (XPE.installed) {
    return
  }

  // 注册UI组件
  Vue.component(prefix + 'Button', Button)
  Vue.component(prefix + 'Icon', Icon)
  Vue.component(prefix + 'Dialog', Dialog)
  Vue.component(prefix + 'Input', Input)
  Vue.component(prefix + 'InputNumber', InputNumber)
  Vue.component(prefix + 'RadioGroup', RadioGroup)
  Vue.component(prefix + 'Radio', Radio)
  Vue.component(prefix + 'Select', Select)
  Vue.component(prefix + 'Option', Option)
  Vue.component(prefix + 'Upload', Upload)
  Vue.component(prefix + 'ColorPicker', ColorPicker)
  Vue.component(prefix + 'Image', Image)
  Vue.component(prefix + 'Carousel', Carousel)
  Vue.component(prefix + 'CarouselItem', CarouselItem)
  Vue.component(prefix + 'Loading', Loading)
  Vue.component(prefix + 'MessageBox', MessageBox)
  Vue.component(prefix + 'Message', Message)
  Vue.component(prefix + 'Backtop', Backtop)
  Vue.component(prefix + 'Collapse', Collapse)
  Vue.component(prefix + 'CollapseItem', CollapseItem)
  Vue.component(prefix + 'Form', Form)
  Vue.component(prefix + 'FormItem', FormItem)
  Vue.component(prefix + 'Switch', Switch)
  
  // 注册XPageEditor
  Vue.component('XPageEditor', XPageEditor)
  // 注册VueAwesomeSwiper
  Vue.component(prefix + 'VueAwesomeSwiper', VueAwesomeSwiper)
  XPE.installed = true
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(XPE, { locale })
}

export default XPE