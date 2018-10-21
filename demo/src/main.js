import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import fastClick from 'fastclick';//解决300毫秒延迟问题
import './registerServiceWorker';
import './assets/styles/reset.css';//解决各浏览器兼容问题
import './assets/styles/border.css';//解决1像素边框问题

fastClick.attach(document.body);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
