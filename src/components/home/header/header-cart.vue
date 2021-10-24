<template>
  <div class="header__cart">
    <router-link to="/basket" class="button button--cart">
      <span>{{ PIZZA_TOTAL + ' ₽' }}</span>
      <div class="button__delimiter"></div>
      <img
        src="../../../img/cart.svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      />
      <span>{{ BASKET.length }}</span>
    </router-link>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters(['BASKET', 'PIZZA_TOTAL']),
    },
  };
</script>
