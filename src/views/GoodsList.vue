<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <span>Goods</span>
      <!-- slot根据名字匹配 -->
      <!-- <span slot="bread">Goods</span> -->
    </nav-bread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a class="default cur">Default</a>
          <a class="price" :class="{'sort-up':sortFlag}" @click="sortGoods()">
            Price
            <svg class="icon icon-arrow-short">
              <use xlink:href="#icon-arrow-short"></use>
            </svg>
          </a>
          <a class="filterby stopPop" @click.stop="showFilterPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter" :class="{'filterby-show':filterBy}">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd>
                <a :class="{'cur':priceChecked==='all'}" @click="setPriceFilter('all')">
                  All
                </a>
              </dd>
              <dd v-for="(item,index) in priceFilter" :key="index">
                <a :class="{'cur':priceChecked===index}" @click="setPriceFilter(index)">
                  {{item.startPrice}} - {{item.endPrice}}
                </a>
              </dd>
            </dl>
          </div>
          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(item, index) in goodsList" :key="index">
                  <div class="pic">
                    <!-- v-lazy: 里面是字符串 -->
                    <a href="#"><img v-lazy="'static/'+item.productImage" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">{{item.salePrice | currency('$')}}</div>
                    <div class="btn-area">
                      <a class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              class="view-more-normal"
              v-infinite-scroll="loadMore"
              infinite-scroll-disabled="busy"
              infinite-scroll-distance="20"
            >
              <img src="./../assets/loading-spinning-bubbles.svg" v-show="loading">
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal :mdShow="mdShow" @close="closeModal">
      <p slot="message">请先登录,否则无法加入到购物车中!</p>
      <div slot="btnGroup">
        <a class="btn btn--m" href="javascript:;" @click="mdShow = false">关闭</a>
      </div>
    </modal>
    <modal :mdShow="mdShowCart" @close="closeModal">
      <p slot="message">
        <svg class="icon-status-ok">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok"></use>
        </svg>
        <span>加入购物车成功!</span>
      </p>
      <div slot="btnGroup">
        <a class="btn btn--m" href="javascript:;" @click="mdShowCart = false">继续购物</a>
        <router-link class="btn btn--m btn--red" href="javascript:;" to="/cart">查看购物车</router-link>
      </div>
    </modal>
    <div class="md-overlay" v-show="overLayFlag" @click.stop="closePop"></div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import NavHeader from '@/components/NavHeader'
  import NavFooter from '@/components/NavFooter'
  import NavBread from '@/components/NavBread'
  import Modal from '@/components/Modal'
  import axios from 'axios'

  export default {
    data () {
      return {
        goodsList: [],
        sortFlag: true,
        page: 1,
        pageSize: 8,
        busy: true,
        loading: false,
        mdShow: false,
        mdShowCart: false,
        priceFilter: [
          {
            startPrice: '0.00',
            endPrice: '100.00'
          },
          {
            startPrice: '100.00',
            endPrice: '500.00'
          },
          {
            startPrice: '500.00',
            endPrice: '1000.00'
          },
          {
            startPrice: '1000.00',
            endPrice: '5000.00'
          }
        ],
        priceChecked: 'all',
        filterBy: false,
        overLayFlag: false
      }
    },
    mounted () {
      this.getGoodsList()
    },
    methods: {
      getGoodsList (flag) {
        let param = {
          page: this.page,
          pageSize: this.pageSize,
          sort: this.sortFlag ? 1 : -1,
          priceLevel: this.priceChecked
        }
        this.loading = true
        axios
          .get('/goods/list', {
            params: param
          })
          .then((response) => {
            let res = response.data
            this.loading = false
            if (res.status === '0') {
              if (flag) {
                this.goodsList = this.goodsList.concat(res.result.list)
                this.busy = res.result.count === 0
              } else {
                this.goodsList = res.result.list
                this.busy = false
              }
            } else {
              this.goodsList = []
            }
          })
      },
      sortGoods () {
        this.sortFlag = !this.sortFlag
        this.page = 1
        this.getGoodsList()
      },
      setPriceFilter (index) {
        this.priceChecked = index
        this.page = 1
        this.getGoodsList()
      },
      loadMore () {
        this.busy = true
        setTimeout(() => {
          this.page++
          this.getGoodsList(true)
        }, 500)
      },
      addCart (productId) {
        console.log('fuck bug! 1')
        axios
          .post('/goods/addCart', {
            productId: productId
          })
          .then((response) => {
            console.log('fuck bug! 2' + response.data.status)
            let res = response.data
            if (res.status === '0') {
              console.log('fuck bug! 3')
              this.mdShowCart = true
              this.$store.commit('updateCartCount', 1)
              // ...mapMutations
              this.setCartCount(this.flag === 'add' ? 1 : -1)
              // this.setCartCount(1)
            } else {
              this.mdShow = true
            }
          })
      },
      closeModal () {
        this.mdShow = false
        this.mdShowCart = false
      },
      showFilterPop () {
        this.filterBy = true
        this.overLayFlag = true
      },
      closePop () {
        this.filterBy = false
        this.overLayFlag = false
        this.mdShowCart = false
      },
      // Call mutation, using the mutation-types constant.
      ...mapMutations({
        setCartCount: 'SET_CART_COUNT'
      })
    },
    components: {
      NavHeader,
      NavFooter,
      NavBread,
      Modal
    }
  }
</script>
