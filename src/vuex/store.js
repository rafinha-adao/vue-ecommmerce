import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    ADD_ITEM(state, product) {
      state.cart.push(product)
    },
    REMOVE_ITEM(state, id) {
      state.cart.splice(state.cart.indexOf(id), 1)
    }
  },
  actions: {
    addItem(store, product){
      store.commit('ADD_ITEM', product)
    },
    removeItem(store, id){
      store.commit('REMOVE_ITEM', id)
    }
  },
  getters: {
    allItems: state => {
      return state.cart
    },
    countItems: state => {
      return state.cart.length
    },
    countSameItem: state => {
      return state.cart.length
    }
  }
})