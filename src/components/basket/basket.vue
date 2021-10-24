<template>
  <div class="wrapper">
    <div class="header">
      <div class="container">
        <logo />
        <headerCart />
      </div>
    </div>
    <div class="content">
      <div v-if="!BASKET.length" class="container container--cart">
        <basketEmpety />
      </div>

      <div v-if="BASKET.length" class="container container--cart">
        <basketCartTop />
        <basketFilled
          v-for="(pizzaData, index) in BASKET"
          :key="pizzaData.id"
          :pizzaData="pizzaData"
          @deletePizza="deletePizza(index)"
          @increment="increment(index)"
          @decrement="decrement(index)"
        />
        <basketCartButton :pizzaLenght="BASKET" />
      </div>
    </div>
  </div>
</template>
<script>
  import logo from '../home/header/logo.vue';
  import headerCart from '../home/header/header-cart.vue';
  import basketEmpety from './basket-content/basket-empty.vue';
  import basketFilled from './basket-content/basket-filled.vue';
  import basketCartTop from './basket-content/basket-cart--top.vue';
  import basketCartButton from './basket-content/basket-cart--button.vue';
  import { mapGetters, mapActions } from 'vuex';
  export default {
    components: {
      logo,
      headerCart,
      basketEmpety,
      basketFilled,
      basketCartTop,
      basketCartButton,
    },
    computed: {
      ...mapGetters(['BASKET']),
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_PIZZA',
        'INCREMENT_ITEM_PIZZA',
        'DECREMENT_ITEM_PIZZA',
      ]),
      deletePizza(index) {
        this.DELETE_FROM_PIZZA(index);
      },
      increment(index) {
        this.INCREMENT_ITEM_PIZZA(index);
      },
      decrement(index) {
        this.DECREMENT_ITEM_PIZZA(index);
      },
    },
  };
</script>
