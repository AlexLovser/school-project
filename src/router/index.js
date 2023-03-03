import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView/HomeView.vue';
import KatalogView from '@/views/KatalogView/KatalogView.vue';
import DetailsView from '@/views/DetailsView/DetailsView.vue';
import ContactsView from '@/views/ContactsView/ContactsView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/katalog',
    name: 'katalog',
    component: KatalogView
  },
  {
    path: '/uni/:tag',
    name: 'uni',
    component: DetailsView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
