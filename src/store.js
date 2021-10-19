import Vuex from 'vuex';
import axios from 'axios';

let store = new Vuex.Store({
  state: { products: [], basket: [] },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_PIZZA: (state, product) => {
      state.basket.push(product);
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios('http://localhost:3000/products', {
        method: 'GET',
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_PIZZA({ commit }, product) {
      commit('SET_PIZZA', product);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    BASKET(state) {
      return state.basket;
    },
  },
});

export default store;
