import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import basket from '../components/basket/basket.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/basket',
    name: 'basket',
    component: basket,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
