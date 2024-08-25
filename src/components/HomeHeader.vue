<template>
  <header>
    <nav class="navbar">
      <div class="logo">Shri Siddhivinayak Waterproofing</div>
      <ul :class="{ 'mobile-menu': isMobileMenuOpen }">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <div class="hamburger" @click="toggleMobileMenu">
        &#9776;
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader',
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>
<style scoped>
.navbar {
  background-color: #1E3A8A;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 1.25rem;
  transition: all 0.3s ease-in-out;
}

.navbar ul li {
  display: inline;
}

.navbar ul li a {
  color: white;
  text-decoration: none;
}

.logo {
  font-family: 'Calibri', sans-serif;
  font-size: 24px;
  margin: 10px;
}

.hamburger {
  display: none;
  font-size: 28px;
  cursor: pointer;
}

.mobile-menu {
  display: none;
}

@media (max-width: 768px) {
  .navbar ul {
    display: none;
    flex-direction: column;
    background-color: #1E3A8A;
    position: absolute;
    top: 70px;
    right: 0;
    width: 200px;
    padding: 1rem;
  }

  .mobile-menu {
    display: flex;
  }

  .hamburger {
    display: block;
  }

  .navbar ul.mobile-menu {
    display: flex;
  }
}
</style>
