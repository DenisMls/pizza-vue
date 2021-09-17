<template>
  <div class="home">
    <div class="wrapper">
      <homeHeader />
      <homeContent />
    </div>
  </div>
</template>

<script>
  import '../assets/app.scss';
  import homeHeader from '../components/home/homeHeader.vue';
  import homeContent from '../components/home/homeContent.vue';
  export default {
    components: { homeHeader, homeContent },
    name: 'Home',
  };
</script>
