import * as types from './mutation-types'

const mutations = {
  [types.SET_NICKNAME] (state, nickName) {
    state.nickName = nickName
  },
  [types.SET_CART_COUNT] (state, cartCount) {
    state.cartCount = cartCount
  }
}

export default mutations