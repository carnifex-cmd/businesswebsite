<template>
    <HomeHeader></HomeHeader>
    <img 
      class = 'heroImage'
      src="../assets/Designer.jpeg">
  <!-- Your Home template here -->
</template>

<script>
import HomeHeader from './HomeHeader.vue'
export default {
  name: 'HomePage',
  components: {
    HomeHeader
  },
}
</script>
<style scoped>
.heroImage{
  height: 24rem;
  width: 100%;
  margin:0;
}
</style>
