<template>
  <div>
    <div class="content">
      <div class="container">
        <div class="content__top">
          <categories />
          <sort />
        </div>
        <h2 class="content__title">Все пиццы</h2>
        <div class="content__items">
          <pizzaBlock />
          <pizzaBlock />
          <pizzaBlock />
          <pizzaBlock />
          <pizzaBlock />
          <pizzaBlock />
          <pizzaBlock />
          <pizzaBlock />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import categories from './content/categories.vue';
  import sort from './content/sort.vue';
  import pizzaBlock from './content/pizza-block.vue';

  export default {
    components: { categories, sort, pizzaBlock },
  };
</script>
