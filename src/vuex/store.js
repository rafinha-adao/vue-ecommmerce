import Vue from "vue";
import Vuex from "vuex";
import API from "../services/API";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    products: [],
  },
  mutations: {
    GET_PRODUCTS(state, products) {
      state.products = products;
    },
    DELETE_PRODUCT(state, id) {
      API.delete('/products/delete/' + id);
      let x = state.products.find((product) => product._id == id);
      console.log(x)
      if (x) {
        state.products.splice(state.products.indexOf(x), 1);
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
    getProducts({ commit }) {
      API.get("/products")
        .then((response) => {
          commit("GET_PRODUCTS", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteProduct(store, id) {
      store.commit("DELETE_PRODUCT", id);
    },
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
    products: (state) => {
      return state.products;
    },
    countProducts: (state) => {
      return state.products.length;
    },
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
      let list = "*Pedido E-commerce*\n\n";

      state.cart.forEach((product) => {
        list +=
          product.name +
          " (" +
          product.id +
          "): " +
          product.count +
          " x R$ " +
          product.price +
          " = R$ " +
          product.count * product.price +
          "\n";
      });

      let total = 0;

      state.cart.forEach((product) => {
        total += product.count * product.price;
      });

      list += "\n\nValor Total: R$ " + total;

      list = window.encodeURIComponent(list);

      console.log(list);
      return list;
    },
  },
});
