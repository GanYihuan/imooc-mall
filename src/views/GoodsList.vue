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
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price" :class="{'sort-up':sortFlag}" @click="sortGoods()">Price
            <svg class="icon icon-arrow-short">
              <use xlink:href="#icon-arrow-short"></use>
            </svg>
          </a>
          <a href="javascript:void(0)" class="filterby stopPop" @click.stop="showFilterPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter" :class="{'filterby-show':filterBy}">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd>
                <a
                  href="javascript:void(0)"
                >
                  All
                </a>
              </dd>
              <dd v-for="(item,index) in priceFilter" :key="index">
                <a
                  href="javascript:void(0)"
                >
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
                    <a href="#"><img :src="'static/'+item.prodcutImg" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">{{item.salePrice | currency('$')}}</div>
                    <div class="btn-area">
                      <a
                        href="javascript:;"
                        class="btn btn--m"
                      >加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
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
        axios
          .get('/goods')
          .then((response) => {
            let res = response.data
            this.goodsList = res.result
          })
      }
    },
    components: {
      NavHeader,
      NavFooter,
      NavBread,
      Modal
    }
  }
</script>
