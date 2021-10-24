import Vuex from 'vuex';
import axios from 'axios';

let store = new Vuex.Store({
  state: { products: [], basket: [] },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_PIZZA: (state, product) => {
      if (state.basket.length) {
        let isProductExists = false;
        state.basket.map(function(item) {
          if (item.id === product.id) {
            isProductExists = true;
            item.quantity++;
          }
        });
        if (!isProductExists) {
          state.basket.push(product);
        }
      } else {
        state.basket.push(product);
      }
    },
    CLEAR_BASKET: (state) => {
      state.basket = [];
    },
    REMOVE_FROM_PIZZA: (state, index) => {
      state.basket.splice(index, 1);
    },
    DECREMENT_ITEM: (state, index) => {
      if (state.basket[index].quantity > 1) {
        state.basket[index].quantity--;
      }
    },
    INCREMENT_ITEM: (state, index) => {
      state.basket[index].quantity++;
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
    CLEAR_TO_BASKET({ commit }) {
      commit('CLEAR_BASKET');
    },
    DECREMENT_ITEM_PIZZA({ commit }, index) {
      commit('DECREMENT_ITEM', index);
    },
    INCREMENT_ITEM_PIZZA({ commit }, index) {
      commit('INCREMENT_ITEM', index);
    },
    DELETE_FROM_PIZZA({ commit }, index) {
      commit('REMOVE_FROM_PIZZA', index);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    BASKET(state) {
      return state.basket;
    },
    PIZZA_TOTAL(state) {
      return state.basket.reduce(
        (res, item) => res + item.price * item.quantity,
        0
      );
    },
  },
});

export default store;
