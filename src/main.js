import Vue from 'vue'
import App from './App'
import router from './router'
// 引入Vant插件
import Vant from 'vant';
import 'vant/lib/index.css';
//引入Vant插件中的Toast轻提示
import { Toast } from 'vant';
Vue.prototype.$msg = Toast

// 引入http
import http from '../http';
Vue.prototype.$http = http

Vue.use(Vant);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
