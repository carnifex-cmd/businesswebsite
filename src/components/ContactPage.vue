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
        <form class="contact-form" @submit.prevent="submitForm">
          <p class="name">Name</p>
          <input v-model="form.name" type="text" class="name-textbox" placeholder="Your Name" />
          <p class="email">Email</p>
          <input v-model="form.email" type="email" class="email-textbox" placeholder="Your Email" />
          <p class="message">Message</p>
          <textarea v-model="form.message" class="message-textbox" placeholder="Enter a message for us"></textarea>
          <button type="submit" :disabled="submitButtonDisabled" class="send-message-button">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      submitButtonDisabled:false
    };
  },
  methods: {
    async submitForm() {
      this.submitButtonDisabled=true;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        controller.abort();
      }, 3000); // 3 seconds
    
      try {
        const response = await fetch('https://siddhivinayakbackend.onrender.com/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form),
          signal: controller.signal
        });
    
        clearTimeout(timeoutId); // clear the timeout if the fetch call is successful
    
        if (!response.ok) {
          throw new Error('Failed to send email');
        }
        else if(response.ok){
          alert('Email sent successfully');
          this.form.name = '';
          this.form.email = '';
          this.form.message = '';
        }
      } catch (error) {
        if (error.name === 'AbortError') {
          console.error('Timeout error: fetch call took longer than 3 seconds');
          alert('Failed to send email due to timeout');
        } else {
          console.error('Error sending email:', error);
          alert('Failed to send email');
        }
      }
      finally{
        this.submitButtonDisabled=false;
      }
    }
  }
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
  .message {
    text-align: left;
    margin: .25rem;
  }

  .name-textbox,
  .email-textbox,
  .message-textbox {
    height: 2.5rem;
    border: 0.5px solid lightgray;
    border-radius: 5px;
    text-indent: 0.7rem;
    outline: none;
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
    cursor: pointer;
    margin-bottom: 4rem;
  }

  .send-message-button:hover {
    background-color: #1E40AF;
    border-color: #1E40AF;
  }

  .send-message-button:disabled {
    background-color: #B2B2B2;
    border-color: #B2B2B2;
    cursor: not-allowed;
  }

  @media screen and (max-width: 768px) {
    .contact-content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
</style>
