import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    cartCount: 0,
  },
  mutations: {
    ADD_ITEM(state, cartModel) {
      let x = state.cart.find((product) => product.id == cartModel.id);
      if (x) {
        x.count++;
      } else {
        state.cart.unshift(cartModel);
      }
    },
    REMOVE_ITEM(state, product) {
      state.cart.splice(state.cart.indexOf(product), 1);
    },
    INCREASE_COUNT(state, cartModel) {
      let x = state.cart.find((product) => product.id == cartModel.id);
      if (x) {
        x.count++;
      } else {
        state.cart.unshift(cartModel);
      }
    },
    DECREASE_COUNT(state, cartModel) {
      let x = state.cart.find((product) => product.id == cartModel.id);
      if (x) {
        x.count--;
      } else {
        state.cart.unshift(cartModel);
      }
    },
  },
  actions: {
    addItem(store, cartModel) {
      store.commit("ADD_ITEM", cartModel);
    },
    removeItem(store, product) {
      store.commit("REMOVE_ITEM", product);
    },
    increaseCount(store, product) {
      store.commit("INCREASE_COUNT", product);
    },
    decreaseCount(store, product) {
      store.commit("DECREASE_COUNT", product);
    },
  },
  getters: {
    allItems: (state) => {
      return state.cart;
    },
    countItems: (state) => {
      return state.cart.length;
    },
    totalPrice: (state) => {
      let total = 0;

      state.cart.forEach((product) => {
        total += product.count * product.price;
      });

      return total;
    },
    orderList: (state) => {
      let list = `Pedido E-commerce\n------------------------------------------\n\n`;

      state.cart.forEach((product) => {
        list += `${product.name} (${product.id}): ${product.count} x R$ ${
          product.price
        } = R$ ${product.count * product.price}\n`;
      });

      let total = 0;

      state.cart.forEach((product) => {
        total += product.count * product.price;
      });

      list += `\nValor Total: R$ ${total}`;

      console.log(list);
      return list;
    },
  },
});
