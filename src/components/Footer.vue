<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2026 Pokémon Vue Playground - Built for Learning</p>
      <p class="footer-note">Data powered by PokéAPI (not yet implemented)</p>
      <!-- LEARNING: You could add social media links here -->
      <!-- LEARNING: You could add a newsletter signup form -->
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
  // LEARNING: You could add computed properties to display dynamic information
  // LEARNING: You could fetch and display stats from an API
}
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 2rem;
  margin-top: auto;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content p {
  margin: 0.5rem 0;
}

.footer-note {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* LEARNING: You can add hover effects, animations, or additional styling here */
</style>
