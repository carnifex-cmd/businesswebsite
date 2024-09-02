<template>
  <section id="projects" class="projects-section">
    <h2>Completed Projects</h2>
    <p class="intro-text">
      Over the years, we have worked on numerous projects, and here are some of them with their approximate invoice value.
    </p>
    <div class="project-cards">
      <div
        v-for="(project, index) in displayedProjects"
        :key="index"
        class="card"
      >
        <div class="card-body">
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="card-location">{{ project.location }}</p>
          <p class="card-description">{{ project.description }}</p>
          <p class="card-amount">{{ project.amount }}</p>
        </div>
      </div>
    </div>
    <div class="toggle-buttons">
      <button v-if="!showAll" class="toggle-button" @click="toggleProjects">
        Show More
      </button>
      <button v-else class="toggle-button fixed-toggle-button" @click="toggleProjects">
        Show Less
      </button>
    </div>
  </section>
</template>

<script>
import {projects} from '../lib/projectsData.js';

export default {
  name: 'ProjectsPage',
  data() {
    return {
      showAll: false,
      projects: projects
    };
  },
  computed: {
    displayedProjects() {
      return this.showAll ? this.projects : this.projects.slice(0, 5);
    },
  },
  methods: {
    toggleProjects() {
      this.showAll = !this.showAll;
    },
  },
}
</script>

<style scoped>
/* Projects Section */
.projects-section {
  padding: 2rem;
  background-color: #f4f4f4;
}

.projects-section h2 {
  font-size: 1.875rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
}

.intro-text {
  font-size: 1.125rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
}

.project-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 320px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-title {
  font-size: 1.5rem;
  margin: 0;
  color: #444;
  font-weight: bold;
}

.card-location {
  color: #777;
  font-size: 1rem;
}

.card-description {
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #555;
}

.card-amount {
  font-size: 1.1rem;
  font-weight: bold;
  color: #222;
  margin-top: auto;
  text-align: center;
}

.toggle-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.toggle-button {
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.toggle-button:hover {
  background-color: #555;
}

.fixed-toggle-button {
  position: fixed;
  bottom: 2rem; /* Adjust as needed */
  z-index: 1000; /* Ensure it is above other content */

}

</style>
