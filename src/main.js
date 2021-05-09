import './mock'
import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import router from './router/index'
import { showMessage } from './utils/index';
import './eventBus';
import store from './store';
store.dispatch('setting/getSetting');
Vue.prototype.$showMessage = showMessage;

// 全局定义自定义属性
import vLoading from '@/directives/Loading';
Vue.directive('loading', vLoading);
import vLazy from '@/directives/lazy';
Vue.directive('lazy', vLazy);

// import './api/banner'


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

// 测试getGlobalSetting
// import {getGlobalSetting} from './api/setting';
// getGlobalSetting().then(res => {
//   console.log(res)
// })


// 测试事件总线
// import eventBus from './eventBus';

// function handler1(data) {
//   console.log('handler1', data);
// }

// function handler2(data) {
//   console.log('handler2', data);
// }

// window.eventBus = eventBus;
// eventBus.$on('event1', handler1);
// eventBus.$on('event1', handler2);
// eventBus.$on('event2', handler1);

