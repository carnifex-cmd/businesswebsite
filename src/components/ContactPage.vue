<template>
  <section id="contact">
    <h2>Contact Us</h2>
    <div class="contact-content">
      <div class="contact-info">
        <h3>Get in touch</h3>
        <p>Have any questions or need a quote? Contact us through the form below or give us a call.</p>
        <ul class="bullets">
          <li><img src="../assets/phoneVector.png" class="vectorImage">Phone: +91 9821489750</li>
          <li><img src="../assets/emailVector.png" class="vectorImage">Email: bhalchandrasawant27@gmail.com</li>
        </ul>
      </div>
      <div class="get-in-touch">
        <form class="contact-form">
          <p class="name">Name</p>
          <input type="text" class="name-textbox" placeholder="Your Name" />
          <p class="email">Email</p>
          <input type="email" class="email-textbox" placeholder="Your Email" />
          <p class="message">Message</p>
          <textarea class="message-textbox" placeholder="Enter a message for us"></textarea>
          <button type="submit" class="send-message-button">Send Message</button>
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
  #contact {
    padding: 2rem;
    background-color: #f1f1f1;
    font-family: 'Roboto', sans-serif;
    font-weight: 800;
  }

  .contact-content {
    display: flex;
    gap: 4rem;
  }

  h2 {
    font-size: 1.875rem;
  }

  .contact-info {
    flex: 1;
    text-align: left;
    font-weight: 500;
  }

  .get-in-touch {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-weight: 500;
  }

  .contact-form label {
    font-size: 1rem;
    margin-bottom: 0;
  }

  .name,
  .email,
  .message{
    text-align:left;
    margin:.25rem;
  }

  .name-textbox,
  .email-textbox,
  .message-textbox {
    height: 2.5rem;
    border: 0.5px solid lightgray;
    border-radius: 5px;
    text-indent: 0.7rem;
    outline:none;
  }

  .message-textbox {
    height: 5rem;
    resize: none;
    padding: 0.3rem;
    margin-bottom: 1rem;
  }

  .name::placeholder,
  .email::placeholder {
    color: #B2B2B2;
  }

  .message::placeholder {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
  }

  .bullets {
    list-style: none;
    padding: 0;
  }

  .bullets li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
  }

  .vectorImage {
    margin-right: 0.5rem;
  }

  .send-message-button {
    color: white;
    width: 137px;
    height: 40px;
    background-color: #2563EB;
    border: 1px solid #2563EB;
    border-radius: 5px;
    transition: background-color 0.3s;
    cursor:pointer;
    margin-bottom: 4rem;
  }

  .send-message-button:hover {
    background-color: #1E40AF;
    border-color: #1E40AF;
  }

  @media screen and (max-width: 768px) {
    .contact-content{
      display:flex;
      flex-direction:column;
      gap:2rem;
    }
  }
</style>
