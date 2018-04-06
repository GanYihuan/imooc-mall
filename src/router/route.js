import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/GoodsList'
// import Title from '@/views/Title'
// import Image from '@/views/Image'
import Cart from '@/views/Cart'

Vue.use(Router)

export default new Router({
  // 路由地址删除了#值
  // mode: 'history'
  routes: [
    {
      // 命名视图
      // path: '/',
      // name: 'GoodsList',
      // components: {
      //  default: GoodsList,
      //  title: Title,
      //  img: Image
      // }
      // 动态路由
      // path: '/goods/:goodsId/user/:name',
      path: '/',
      name: 'GoodsList',
      component: GoodsList
      // 嵌套路由
      // ,
      // children: [
      //   {
      //     path: '/title',
      //     name: 'Title',
      //     component: Title
      //   }
      // ],
      // children: [
      //   {
      //     path: '/image',
      //     name: 'Image',
      //     component: Image
      //   }
      // ]
    },
    {
      path: '/cart/:cartId',
      name: 'cart',
      component: Cart
    }
  ]
})
