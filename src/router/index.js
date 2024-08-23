import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ServicesPage from '../components/ServicesPage.vue';
import AboutPage from '../components/AboutPage.vue';
import ContactPage from '../components/ContactPage.vue';

// Define the routes
const routes = [
  { path: '/', component: HomePage },
  { path: '/services', component: ServicesPage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage }
];

// Create and export the router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
