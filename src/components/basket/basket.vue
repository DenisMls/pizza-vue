<template>
  <div class="wrapper">
    <div class="header">
      <div class="container">
        <logo />
        <headerCart />
      </div>
    </div>
    <div class="content">
      <div v-if="false" class="container container--cart">
        <basketEmpety />
      </div>
      <div v-if="true" class="container container--cart">
        <basketFilled v-if="true" />
      </div>
    </div>
  </div>
</template>
<script>
  import logo from '../home/header/logo.vue';
  import headerCart from '../home/header/header-cart.vue';
  import basketEmpety from './basket-content/basket-empty.vue';
  import basketFilled from './basket-content/basket-filled.vue';
  export default {
    components: { logo, headerCart, basketEmpety, basketFilled },
  };
</script>
