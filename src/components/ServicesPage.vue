<template>
  <section id="services">
    <div class="services-card">
      <h1>Our Services</h1>
      <div class="infoCards">
        <div class="card">
          <div class="repair-image">
            <img src="../assets/Vector.png">
          </div>
          <h3>General Maintenance</h3>
          <p>We provide comprehensive maintenance services to keep your buildings in top shape.</p>
        </div>
        <div class="card">
          <div class="drop-image">
            <img src="../assets/waterdropVector.png">
          </div>
          <h3>Waterproofing</h3>
          <p>Our waterproofing solutions ensure your buildings remain dry and protected from water damage.</p>
        </div>
        <div class="card">
          <div class="structural-repair-image">
            <img src="../assets/structuralRepairVector.png">
          </div>
          <h3>Structural Repairs</h3>
          <p>We offer structural repair services to address any issues and maintain the integrity of your buildings.</p>
        </div>
        <div class="card">
          <div class="painting-image">
            <img src="../assets/paintingVector.png">
          </div>
          <h3>Painting</h3>
          <p>Our painting services enhance the aesthetics of your buildings with high-quality finishes.</p>
        </div>
        <div class="card">
          <div class="plumbing-image">
            <img src="../assets/plumbingVector.png">
          </div>
          <h3>Plumbing</h3>
          <p>We provide reliable plumbing services to ensure your water systems are always functioning properly.</p>
        </div>
        <div class="card">
          <div class="plumbing-image">
            <img src="../assets/flooringVector.png">
          </div>
          <h3>Flooring</h3>
          <p>We offer professional flooring services to upgrade the look and durability of your spaces.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesPage'
}
</script>

<style scoped>
.services-card {
  background-color: #E5E7EB;
  height: auto;
}
h1 {
  font-size: 1.875rem;
  margin: 0;
  padding-top: 4rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
}
.infoCards {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 2rem;
  padding-bottom: 2rem;
}

.card {
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

img{
  height:2rem;
}

.card:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  transform: scale(1.05);
}

@media screen and (max-width: 1024px) {
  .infoCards {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on tablet */
  }
}

@media screen and (max-width: 768px) {
  .services-card {
    height: auto;
  }
  h1 {
    padding-top: 2rem;
  }
  .infoCards {
    grid-template-columns: 1fr; /* 1 column on mobile */
    gap: 1.5rem;
  }
}
</style>
