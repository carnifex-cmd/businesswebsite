<template>
    <header>
      <nav class="navbar">
        <div class="logo">Shri Siddhivinayak Waterproofing</div>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HomeHeader'
  }
  </script>
  
  <style scoped>
  .navbar {
    background-color: #1E3A8A;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
  }
  .navbar ul {
    font-family: 'Roboto', sans-serif;
    list-style: none;
    display: flex;
    gap: 1.25rem;
  }
  .navbar ul li {
    display: inline;
  }
  .navbar ul li a {
    color: white;
    text-decoration: none;
  }
  .logo{
    font-family: 'Calibri', sans-serif;
    font-size: 24px;
    margin: 10px;
  }
  </style>
  