<template>
  <header class="header">
    <div class="header-content">
      <h1 class="logo">⚡ Pokémon Vue ⚡</h1>
      
      <!-- Navigation menu -->
      <!-- LEARNING: router-link creates navigation links that don't reload the page -->
      <nav class="nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/pokemon" class="nav-link">Pokémon List</router-link>
        <!-- LEARNING: You can add more navigation links here as you expand -->
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
  // LEARNING: You could add data() here to track if mobile menu is open
  // LEARNING: You could add methods to toggle mobile menu
  // LEARNING: You could add computed properties to check current route
}
</script>

<style scoped>
/* scoped means these styles only apply to this component */
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Active link styling */
.nav-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.3);
  font-weight: bold;
}

/* LEARNING: Add media queries here for responsive mobile design */
</style>
