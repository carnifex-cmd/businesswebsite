<template>
  <section id="home">
    <HomeHeader></HomeHeader>
    <div class="hero-slideshow">
      <!-- Slideshow Images -->
      <div class="slide fade">
        <img class="heroImage" src="../assets/hero1.jpeg" alt="Hero Image 1">
      </div>
      <div class="slide fade">
        <img class="heroImage" src="../assets/hero2.jpeg" alt="Hero Image 2">
      </div>
      <div class="slide fade mobile-image" id="hero3">
        <img class="heroImage" src="../assets/hero3.jpeg" alt="Hero Image 3">
      </div>
      
      <!-- Text Overlay -->
      <div class="overlay">
        <h1>Your Trusted Repair Experts</h1>
        <p>Safeguarding Your Property with Comprehensive Solutions</p>
      </div>
    </div>
  </section>
</template>
<script>
import HomeHeader from './HomeHeader.vue'

export default {
  name: 'HomePage',
  components: {
    HomeHeader
  },
  mounted() {
    this.handleSlideshow();
    window.addEventListener('resize', this.handleSlideshow);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleSlideshow);
  },
  methods: {
    handleSlideshow() {
      if (window.innerWidth >= 1024) { // Desktop devices
        this.startSlideshow();
        document.querySelectorAll('.mobile-image').forEach(el => el.style.display = 'none');
      } else { // Mobile devices
        document.querySelectorAll('.slide').forEach(el => el.style.display = 'none');
        document.querySelector('.mobile-image').style.display = 'block';
      }
    },
    startSlideshow() {
      let slideIndex = 0;
      const slides = document.getElementsByClassName("slide");
      
      function showSlides() {
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 5000); // Change image every 5 seconds
      }
      
      showSlides(); // Initialize the slideshow
    }
  }
}
</script>
<style scoped>
.hero-slideshow {
  position: relative;
  max-width: 100%;
  height: 24rem; /* Adjust height to match your original size */
  overflow: hidden;
}

.hero-slideshow::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Adjust darkness with alpha value */
  z-index: 1; /* Make sure it's behind the text but in front of the images */
}

.slide {
  display: none;
}

.mobile-image {
  display: none;
  width: max-content !important;/* Hide mobile-specific image by default */
}

.heroImage {
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: grayscale(100%); /* Gray filter for aesthetics */
}

/* The overlay stays fixed in place on top of the slideshow */
.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the overlay */
  text-align: center;
  color: white;
  z-index: 30;
}

.overlay h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
}

.overlay p {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

/* Fade effect for the images */
.fade {
  animation-name: fadeEffect;
  animation-duration: 1.5s;
}

@keyframes fadeEffect {
  from { opacity: 0.4 }
  to { opacity: 1 }
}

/* Media queries for smaller devices */
@media (max-width: 1024px) { /* Tablets and mobile devices */
  .slide {
    display: none; /* Hide slideshow images on smaller devices */
  }

  .mobile-image {
    display: block; /* Show the specific image on smaller devices */
  }
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  width: 300px;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 1rem;
}

.card-title {
  font-size: 1.25rem;
  margin: 0;
}

.card-location {
  color: #666;
  font-size: 1rem;
}

.card-description {
  font-size: 0.9rem;
  margin: 0.5rem 0;
}

.card-amount {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
}
</style>
