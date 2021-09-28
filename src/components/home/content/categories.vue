<template>
  <div class="categories">
    <ul>
      <li
        v-for="(item, i) in items"
        :key="i"
        :class="{ active: active === item }"
        @click="active = active === item ? null : item"
      >
        {{ item.categories }}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: ['items'],
    data() {
      return {
        active: false,
      };
    },
  };
</script>
