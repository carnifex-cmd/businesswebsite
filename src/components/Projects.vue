
Copy code
<template>
    <section id="projects" class="projects-section">
        <h2>Completed Projects</h2>
        <p class="intro-text">
            Over the years, we have worked on numerous projects, and here are some of them with their approximate invoice value.
        </p>
        <div class="project-cards">
            <div 
                v-for="(project, index) in projects" 
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
        <p class="more-projects">...and many more.</p>
    </section>
</template>

<script>
export default {
  name: 'ProjectsPage',
  data() {
    return {
      projects: [
        {
          title: "IITC Kanjur Pvt. Ltd.",
          location: "Kanjur Marg",
          description: "Waterproofing the external wall of a 300,000 sq.ft building using Dr. Fixit Raincoat.",
          amount: "₹1,25,00,000"
        },
        {
          title: "IITC Kanjur Pvt. Ltd.",
          location: "Kanjur Marg",
          description: "Terrace waterproofing of 10,000 sq.ft with Brick-bat coba treatment.",
          amount: "₹30,00,000"
        },
        {
          title: "Kesar Residency Co-op. Hsg. Soc. Ltd.",
          location: "Charkop, Kandivali",
          description: "Complete waterproofing and painting of a 400,000 sq.ft residential building.",
          amount: "₹60,00,000"
        },
        {
          title: "Manish Lotus Co-op. Hsg. Soc. Ltd.",
          location: "D.N. Nagar, Andheri",
          description: "Waterproofing and replastering of external and internal walls, covering 75,000 sq.ft.",
          amount: "₹40,00,000"
        },
        {
          title: "N.G. Park Co-op. Hsg. Soc. Ltd.",
          location: "Rawalpada, Borivali-East",
          description: "Comprehensive building restoration including waterproofing, structural repairs, and internal painting of 100,000 sq.ft.",
          amount: "₹40,00,000"
        },
        {
          title: "Andheri Jumbo Co-op. Hsg. Soc. Ltd.",
          location: "Kol Dongari, Andheri",
          description: "Waterproofing and painting of a 40,000 sq.ft residential building.",
          amount: "₹30,00,000"
        },
        {
          title: "Topiwala Co-op. Hsg. Soc. Ltd.",
          location: "Goregaon - West",
          description: "Complete waterproofing, structural repair, and internal painting of a 30,000 sq.ft building.",
          amount: "₹30,00,000"
        },
        {
          title: "Vishnu Bhagwan Co-op. Hsg. Soc. Ltd.",
          location: "Andheri-West",
          description: "Building-wide waterproofing, structural repair, and replastering of 80,000 sq.ft.",
          amount: "₹30,00,000"
        },
        {
          title: "Bunglow - Dias",
          location: "Mitchawki, Malad",
          description: "Waterproofing, painting, and plumbing work covering 21,000 sq.ft (including terrace).",
          amount: "₹22,00,000"
        },
        {
          title: "Bunglow - Hebron",
          location: "Mitchawki, Malad",
          description: "Comprehensive waterproofing, painting, and plumbing for a 18,000 sq.ft property, including terrace.",
          amount: "₹20,00,000"
        }
      ]
    };
  }
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

.more-projects {
  margin-top: 2rem;
  text-align: center;
  font-size: 1.2rem;
  color: #666;
}
</style>
