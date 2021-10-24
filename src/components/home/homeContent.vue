<template>
  <div>
    <div class="content">
      <div class="container">
        <div class="content__top">
          <categories :items="items" />
        </div>
        <h2 class="content__title">Все пиццы</h2>
        <div class="content__items">
          <pizzaBlock
            v-for="PRODUCTS in filterPizza"
            :key="PRODUCTS"
            :product="PRODUCTS"
            :basketArray="BASKET"
            @addToPizza="addToPizza"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import categories from './content/categories.vue';

  import pizzaBlock from './content/pizza-block.vue';

  import { mapActions, mapGetters } from 'vuex';

  export default {
    components: {
      categories,
      pizzaBlock,
    },
    data() {
      return {
        sortedPizza: [],
        prodVyv: [],
        items: [
          { categories: 'Все', volume: '0' },
          { categories: 'Мясные', volume: '1' },
          { categories: 'Вегетарианская', volume: '2' },
          { categories: 'Гриль', volume: '3' },
          { categories: 'Острые', volume: '4' },
          { categories: 'Закрытые', volume: '5' },
        ],
      };
    },

    computed: {
      ...mapGetters(['PRODUCTS', 'BASKET']),
      filterPizza() {
        if (this.sortedPizza.length) {
          return this.sortedPizza;
        } else {
          return this.PRODUCTS;
        }
      },
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_PIZZA',
        'CLEAR_TO_BASKET',
      ]),
      addToPizza(data) {
        this.ADD_TO_PIZZA(data);
      },
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API();
    },
  };
</script>
