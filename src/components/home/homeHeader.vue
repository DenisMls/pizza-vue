<template>
  <div>
    <div class="header">
      <div class="container">
        <logo />
        <headerCart />
      </div>
    </div>
  </div>
</template>
<script>
  import headerCart from './header/header-cart.vue';
  import logo from './header/logo.vue';
  export default {
    components: { logo, headerCart },
  };
</script>
