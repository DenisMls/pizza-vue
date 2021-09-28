<template>
  <div>
    <div class="content">
      <div class="container">
        <div class="content__top">
          <categories :items="items" />
          <sort />
        </div>
        <h2 class="content__title">Все пиццы</h2>
        <div class="content__items">
          <pizzaCheeseburger />
          <pizzaCheese />
          <pizzaChick />
          <pizzaShrimps />
          <pizzaCheeseburger />
          <pizzaCheese />
          <pizzaChick />
          <pizzaShrimps />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import categories from './content/categories.vue';
  import sort from './content/sort.vue';
  import pizzaCheeseburger from './content/pizza-cheeseburger.vue';
  import pizzaCheese from './content/pizza-cheese.vue';
  import pizzaChick from './content/pizza-Chick.vue';
  import pizzaShrimps from './content/pizza-shrimps.vue';

  export default {
    components: {
      categories,
      sort,
      pizzaCheeseburger,
      pizzaCheese,
      pizzaChick,
      pizzaShrimps,
    },
    data() {
      return {
        items: [
          { categories: 'Все' },
          { categories: 'Мясные' },
          { categories: 'Вегетарианская' },
          { categories: 'Гриль' },
          { categories: 'Острые' },
          { categories: 'Закрытые' },
        ],
      };
    },
  };
</script>
