import Vue from 'vue'
import App from './App'
import router from './router/route'
// import axios from 'axios'
import Vuex from 'vuex'
import VueLazyload from 'vue-lazyload'
// 向下滑动自动加载数据
import infiniteScroll from 'vue-infinite-scroll'
import { currency } from './util/currency'

import './assets/css/base.css'
import './assets/css/checkout.css'
import './assets/css/product.css'

Vue.use(infiniteScroll)
Vue.use(Vuex)
Vue.use(VueLazyload, {
  loading: 'static/loading-svg/loading-bars.svg',
  try: 3 // default 1
})

Vue.filter('currency', currency)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    nickName: '',
    cartCount: 0
  },
  mutations: {
    // 更新用户信息
    updateUserInfo (state, nickName) {
      state.nickName = nickName
    },
    updateCartCount (state, cartCount) {
      state.cartCount += cartCount
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
