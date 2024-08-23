<template>
  <HomePage></HomePage>
  <ServicesPage></ServicesPage>
  <AboutPage></AboutPage>
  <ContactPage></ContactPage>
</template>

<script>
import HomePage from './components/HomePage.vue'
import ServicesPage from './components/ServicesPage.vue'
import ContactPage from './components/ContactPage.vue'
import AboutPage from  './components/AboutPage.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    ServicesPage,
    ContactPage,
    AboutPage,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
