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
      // Dynamic routing:
      // {
      //  path: '/goods/:goodsId/user/:name',
      //  name: 'GoodsList',
      //  component: GoodList
      // }
      // Nested Routes:
      // {
      //  path: '/goods',
      //  name: 'GoodsList',
      //  component: GoodList,
      //  children: [
      //   {
      //     path: 'title',
      //     name: 'title',
      //     component: Title
      //   },
      //   {
      //     path: 'img',
      //     name: 'img',
      //     component: Image
      //   }
      //  ]
      // }
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
