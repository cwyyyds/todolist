import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// base 基础样式放在上面
import './assets/styles/base.css'
import './assets/styles/index.css'

new Vue({
  render: (h) => h(App),
}).$mount('#app')
