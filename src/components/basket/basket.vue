<template>
  <div class="wrapper">
    <div class="header">
      <div class="container">
        <logo />
        <headerCart />
      </div>
    </div>
    <div class="content">
      <basketCartTop />
      <div v-if="!BASKET.length" class="container container--cart">
        <basketEmpety />
      </div>
      <div v-if="BASKET.length" class="container container--cart">
        <basketFilled
          v-for="pizzaData in BASKET"
          :key="pizzaData"
          :pizzaData="BASKET"
        />
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
  import { mapGetters } from 'vuex';
  export default {
    components: { logo, headerCart, basketEmpety, basketFilled, basketCartTop },
    computed: {
      ...mapGetters(['BASKET']),
    },
  };
</script>
