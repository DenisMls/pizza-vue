<template>
  <div class="header__cart">
    <router-link to="/basket" class="button button--cart">
      <span>{{ price + ' ₽' }}</span>
      <div class="button__delimiter"></div>
      <img
        src="../../../img/cart.svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      />
      <span>{{ number }}</span>
    </router-link>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        price: '520',
        number: '3',
      };
    },
  };
</script>
