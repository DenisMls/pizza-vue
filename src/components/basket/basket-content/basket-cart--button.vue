<template>
  <div class="cart__bottom">
    <div class="cart__bottom-details">
      <span>
        Всего пицц: <b>{{  }} шт.</b>
      </span>
      <span>
        Сумма заказа: <b>{{ PIZZA_TOTAL + ' ₽' }}</b>
      </span>
    </div>
    <div class="cart__bottom-buttons">
      <router-link
        to="/"
        class="button button--outline button--add go-back-btn"
      >
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13L1 6.93015L6.86175 1"
            stroke="#D3D3D3"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <span>Вернуться назад</span>
      </router-link>
      <div class="button pay-btn">
        <span>Оплатить сейчас</span>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  export default {
    props: {
      pizzaLenght: {
        msg: Object,
        default() {
          return {
            count: {},
          };
        },
      },
    },
    computed: {
      ...mapGetters(['PIZZA_TOTAL']),
    },
  };
</script>
