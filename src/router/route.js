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
  // The routing address deletes the # value.
  // mode: 'history'
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
      // Named view
      // path: '/',
      // name: 'GoodsList',
      // components: {
      //  default: GoodsList,
      //  title: Title,
      //  img: Image
      // }
      // Dynamic routing:
      // {
      //  path: '/goods/:goodsId/user/:name',
      //  name: 'GoodsList',
      //  component: GoodList
      // }
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
      path: '/goods',
      name: 'GoodsList',
      component: GoodsList
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
