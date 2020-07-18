import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css';
import Echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts

new Vue({
  render: h => h(App),
}).$mount('#app')
