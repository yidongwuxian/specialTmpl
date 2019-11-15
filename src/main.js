// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* 引入这些内容为了弹框的使用 */
import layeyCss from '../static/layer/theme/default/layer.css';
import jquery from '../static/jquery.js';
import layer from '../static/layer/layer.js';

Vue.config.productionTip = false;
Vue.prototype.$layer = layer;
Vue.prototype.$jquery = jquery;
// 不同组件之间的通信
Vue.prototype.$hub = new Vue();

import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});