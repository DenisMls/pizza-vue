<template>
  <div>
    <div class="content">
      <div class="container">
        <div class="content__top">
          <categories :items="items" @click="sortByCategories(items)" />
          <sort />
        </div>
        <h2 class="content__title">Все пиццы</h2>
        <div class="content__items">
          <pizzaBlock
            v-for="product in filterPizza"
            :key="product.article"
            :product="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import categories from './content/categories.vue';
  import sort from './content/sort.vue';
  import pizzaBlock from './content/pizza-block.vue';

  import { mapActions, mapGetters } from 'vuex';

  export default {
    components: {
      categories,
      sort,
      pizzaBlock,
    },
    data() {
      return {
        sortedPizza: [],
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

    computed: {
      ...mapGetters(['PRODUCTS']),
      filterPizza() {
        if (this.sortedPizza.length) {
          return this.sortedPizza;
        } else {
          return this.PRODUCTS;
        }
      },
    },
    methods: {
      ...mapActions(['GET_PRODUCTS_FROM_API']),
      sortByCategories(items) {
        this.sortedPizza = [];
        let vm = this;
        this.PRODUCTS.map(function(prodNew, PRODUCTS) {
          if (PRODUCTS.category === items.categories) {
            vm.sortedPizza.push(prodNew);
          }
        });
      },
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API();
    },
  };
</script>
