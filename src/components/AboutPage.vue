<template>
    <section class="about">
      <div class="about-image">
        <img src="../assets/Designer.jpeg">
      </div>
      <div class="about-content">
        <h1>About Us</h1>
        <p>Shri Siddhivinayak Waterproofing is one of the leading providers of maintenance and waterproofing services for societies and commercial buildings. With years of experience and a commitment to excellence, we ensure that your buildings remain in top condition, protected from the elements and structural issues.</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutPage'
  }
  </script>
  <style>
    .about {
      font-family: 'Roboto', sans-serif;
      font-weight: 800;
      text-align: center;
      background:#DDDDDD;
      display:flex;
      padding-top: 4rem;
      justify-content:flex-start;
      gap:4rem;
    }
    .about-content{
      flex-direction:row;
      text-align:left;
      font-weight:400;
      margin-right:0.5rem;
    }
    .about-image{
      flex-direction:row;
      width:600px;
      height:400px;
    }
    img{
      width:inherit;
    }
    h1{
      font-size:1.875rem;
    }

  @media screen and (max-width: 768px) {
    .about{
      flex-direction:column;
      gap:0;
      padding-top:2rem;
    }
    .about-content{
      margin:1rem;
    }
    .about-image{
      display:none;
    }
  }
  </style>
  