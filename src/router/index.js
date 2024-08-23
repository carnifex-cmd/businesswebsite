import Vue from 'vue'
import VueRouter from 'vue-router'

// Import the components for different routes
import HomePage from '../components/HomePage.vue';
import ServicesPage from '../components/ServicesPage.vue';
import AboutPage from '../components/AboutPage.vue';
import ContactPage from '../components/ContactPage.vue';

// Tell Vue to use VueRouter
Vue.use(VueRouter)

// Define the routes
const routes = [
  { path: '/', component: HomePage },
  { path: '/services', component: ServicesPage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage }
];

// Create and export the router instance
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
