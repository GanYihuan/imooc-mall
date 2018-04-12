import Vue from 'vue'
import App from './App'
import router from './router/route'
// import axios from 'axios'
import Vuex from 'vuex'
import VueLazyload from 'vue-lazyload'
// 向下滑动自动加载数据
import infiniteScroll from 'vue-infinite-scroll'
import { currency } from './util/currency'
// import store from './store/vuex'

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
    },
    initCartCount (state, cartCount) {
      state.cartCount = cartCount
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  // mounted () {
  //   this.checkLogin()
  //   this.getCartCount()
  // },
  // methods: {
  //   checkLogin () {
  //     axios.get('users/checkLogin').then(response => {
  //       let res = response.data
  //       if (res.status === '0') {
  //         this.$store.commit('updateUserInfo', response.result)
  //       } else {
  //         if (this.$route.path !== '/goods') {
  //           this.$router.push('/goods')
  //         }
  //       }
  //     })
  //   },
  //   getCartCount () {
  //     axios.get('users/getCartCount').then(response => {
  //       let res = response.data
  //       if (res.status === '0') {
  //         this.$store.commit('updateCartCount', res.result)
  //       }
  //     })
  //   }
  // },
  // template: '<App/>',
  // components: {App}
  render: h => h(App)
})
// .$mount('#app')
