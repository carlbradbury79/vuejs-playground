<template>
  <div class="home">
    <div class="hero">
      <h1>Welcome to Pokémon Vue!</h1>
      <p class="subtitle">A simple VueJS playground to learn and explore</p>
    </div>
    
    <div class="content">
      <div class="card">
        <h2>🎯 What is this?</h2>
        <p>
          This is a simple VueJS application themed around Pokémon. 
          It's designed to help you learn Vue.js concepts by providing a foundation you can build upon.
        </p>
      </div>
      
      <div class="card">
        <h2>🚀 What can you learn?</h2>
        <ul>
          <li>Vue Components and Props</li>
          <li>Vue Router for navigation</li>
          <li>State Management (Vuex/Pinia)</li>
          <li>API calls with fetch or axios</li>
          <li>Computed properties and watchers</li>
          <li>Lifecycle hooks</li>
        </ul>
      </div>
      
      <div class="card">
        <h2>📝 Next Steps</h2>
        <p>
          Check out the Pokémon List page to see a basic page structure. 
          Then start adding features like:
        </p>
        <ul>
          <li>Fetch real Pokémon data from PokéAPI</li>
          <li>Add individual Pokémon detail pages</li>
          <li>Implement search and filtering</li>
          <li>Add favorites with local storage</li>
          <li>Create a team builder feature</li>
        </ul>
      </div>
      
      <div class="cta">
        <router-link to="/pokemon" class="button">
          View Pokémon List →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
  // LEARNING: Add data() to create component state
  // LEARNING: Add mounted() lifecycle hook to run code when component loads
  // LEARNING: Add methods for user interactions
}
</script>

<style scoped>
.home {
  width: 100%;
}

.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.content {
  display: grid;
  gap: 1.5rem;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card h2 {
  color: #667eea;
  margin-bottom: 1rem;
}

.card ul {
  margin-left: 1.5rem;
  line-height: 1.8;
}

.card p {
  line-height: 1.6;
  color: #666;
}

.cta {
  text-align: center;
  padding: 2rem 0;
}

.button {
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

/* LEARNING: Add responsive design with media queries */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
}
</style>
