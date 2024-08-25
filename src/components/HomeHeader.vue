<template>
    <header>
      <nav class="navbar">
        <div class="logo">Shri Siddhivinayak Waterproofing</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
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
  