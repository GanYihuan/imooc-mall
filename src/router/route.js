import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/GoodsList'

Vue.use(Router)

export default new Router({
  // 路由地址删除了#值
  // mode: 'history'
  routes: [
    {
      // 动态路由
      // path: '/goods/:goodsId/user/:name',
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    }
  ]
})
