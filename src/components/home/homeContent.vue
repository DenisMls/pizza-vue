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
          <pizzaBlock
            v-for="product in products"
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

  export default {
    components: {
      categories,
      sort,
      pizzaBlock,
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
        products: [
          {
            image: 'pizz-cheese.png',
            name: 'Сырная-пицца',
            price: 'от 395 ₽',
            article: 'product0',
            available: true,
            category: 'Вегетерианские',
          },
          {
            image: 'Cheeseburger.png',
            name: 'Чизбургер-пицца',
            price: 'от 395 ₽',
            article: 'product1',
            available: true,
            category: 'Мясные',
          },
          {
            image: 'Chick.png',
            name: 'Сырный цыпленок',
            price: 'от 395 ₽',
            article: 'product2',
            available: false,
            category: 'Гриль',
          },
          {
            image: 'shrimps.png',
            name: 'Креветки по-азиатски',
            price: 'от 395 ₽',
            article: 'product3',
            available: true,
            category: 'Острые',
          },
        ],
      };
    },
  };
</script>
