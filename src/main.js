import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import wx from 'weixin-js-sdk'
// import '../static/css/mint-ui.scss'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { InfiniteScroll } from 'mint-ui';
import './assets/my-mint.css'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(InfiniteScroll);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
