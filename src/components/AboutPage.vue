<template>
    <section id="about">
      <div class="about-image">
        <img class="about-image" src="../assets/Designer.jpeg">
      </div>
      <div class="about-content">
        <h1>About Us</h1>
        <div v-html="aboutUsText"></div>
      </div>
    </section>
  </template>

  <script>
  export default {
    name: 'AboutUsPage',
    data() {
      return {
        aboutUsText: `
          Shri Siddhivinayak Waterproofing is one of the leading providers of maintenance and waterproofing services for societies, commercial buildings, offices, and factories.
          With years of experience and a commitment to excellence, we ensure that your buildings remain in top condition, protected from the elements and structural issues.<br><br>
          Our team of skilled professionals uses advanced techniques and high-quality materials to deliver reliable waterproofing solutions tailored to your needs.
          We pride ourselves on our customer-focused approach, working closely with clients to deliver results that not only meet but exceed expectations.
          Whether it's preventing future water intrusion or addressing existing issues, Shri Siddhivinayak Waterproofing is your trusted partner in protecting your property.
        `
      };
    }
  }
  </script>
  
  <style>
    #about {
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
      margin-right:1rem;
    }
    .about-image{
      flex-direction:row;
      width:600px;
      height:400px;
    }
    .about-image{
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
  