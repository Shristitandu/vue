
import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '../pages/AppHome.vue';
import AppProducts from '../pages/AppProducts.vue';
import AppContactUs from '../pages/AppContactUs.vue';
import AppNavbar from '../pages/AppNavbar.vue';
import AppFooter from '@/pages/AppFooter.vue';
import userpanelAuth from '@/pages/userpanelAuth.vue';
import AdminPanel from '@/pages/AdminPanel.vue';
import AppAboutus from '@/pages/AppAboutus.vue';
import AppCart from '@/pages/AppCart.vue';
// import { component } from 'vue/types/umd';

const routes = [
  {
    path: '/',
    name: 'AppHome',
    component: AppHome,
  },
  {
    path: '/AppProducts',
    name: 'AppProducts',
    component: AppProducts,
  },
  {
    path: '/AppContactUs',
    name: 'AppContactUs',
    component: AppContactUs
  },
  {
    path: '/AppNavbar',
    name: 'AppNavbar',
    component: AppNavbar
  },
  {
    path: '/AppFooter',
    name: 'AppFooter',
    component: AppFooter
  },
  {
    path: '/AdminPanel',
    name: 'AdminPanel',
    component: AdminPanel
  },
  {
    path: '/userpanelAuth',
    name: 'userpanelAuth',
    component: userpanelAuth
  },
  {
    path: '/AppAboutus',
    name: 'AppAboutus',
    component: AppAboutus
  },
  {
    path: '//AppCart',
    name: '/AppCart',
    component: AppCart
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

   

