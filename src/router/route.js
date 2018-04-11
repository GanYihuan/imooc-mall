import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/GoodsList'
import Cart from '@/views/Cart'
import Address from '@/views/Address'
import OrderConfirm from '@/views/OrderConfirm'
import OrderSuccess from '@/views/OrderSuccess'
// import Title from '@/views/Title'
// import Image from '@/views/Image'

Vue.use(Router)

export default new Router({
  // 路由地址删除了#值
  // mode: 'history'
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
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
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/orderConfirm',
      name: 'OrderConfirm',
      component: OrderConfirm
    },
    {
      path: '/orderSuccess',
      name: 'OrderSuccess',
      component: OrderSuccess
    }
  ]
})
