<template>
  <div class="categories">
    <ul>
      <li
        v-for="(item, i) in items"
        :key="i"
        :class="{ active: active === item.categories }"
        @click="active = item.categories"
      >
        {{ item.categories }}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      items: {
        msg: Object,
        default() {
          return {};
        },
      },
    },
    data() {
      return {
        active: 'Все',
      };
    },
  };
</script>
