<template>
  <div class="page-footer">
    <p>&copy; {{ new Date().getFullYear() }} Shri Siddhivinayak Waterproofing. All rights reserved.</p>
  </div>
</template>

<script>
export default {
  name: 'PageFooter'
}
</script>

<style scoped>
.page-footer {
  height: 3.5rem;
  background-color: #1E3A8A;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
}
</style>
