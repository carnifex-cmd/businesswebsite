<template>
  <section class="contact">
    <h2>Contact Us</h2>
    <div class="contact-content">
      <div class="contact-info">
        <p>Have any questions or need a quote? Contact us through the form below or give us a call.</p>
        <ul class="bullets">
          <li><img src="../assets/phoneVector.png" class="vectorImage">Phone: +91 9821489750</li>
          <li><img src="../assets/emailVector.png" class="vectorImage">Email: bhalchandrasawant27@gmail.com</li>
        </ul>
      </div>
      <div class="get-in-touch">
        <form class="contact-form">
          <p class="name">Name</p>
          <input type="text" placeholder="Your Name" />
          <p class="email">Email</p>
          <input type="email" placeholder="Your Email" />
          <p class="message">Message</p>
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>
  
  <script>
  export default {
    name: 'ContactPage'
  }
  </script>
  <style scoped>
    .contact {
      padding: 2rem;
      background-color: #f1f1f1;
      font-family: 'Roboto', sans-serif;
      font-weight: 800;
    }
    .contact-content{
      display:flex;
      gap:4rem;
    }
    h2{
      font-size:1.875rem;
    }
    .contact-info{
      flex-direction:row;
      text-align:left;
      font-weight:500;
    }
    .get-in-touch{
      flex-direction:row;
      width:50%
    }
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      font-weight:500;
    }
    .name{
      text-align:left;
      margin-bottom:0px;
      font-size:1rem;
    }
    .email{
      text-align:left;
      margin-bottom:0px;
      font-size:1rem;
    }
    .message{
      text-align:left;
      margin-bottom:0px;
      font-size:1rem;
    }
    .bullets{
      list-style-type: none;
    }
    li{
      margin-bottom:0.5rem;
    }
    .vectorImage{
      margin-right:0.25rem;
    }
  </style>
  