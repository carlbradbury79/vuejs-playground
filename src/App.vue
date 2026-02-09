<template>
  <div id="app">
    <!-- Header component appears on every page -->
    <Header />
    
    <!-- router-view is where page components will be rendered based on the current route -->
    <!-- LEARNING: This is the Vue Router outlet - different page components load here -->
    <main class="main-content">
      <router-view />
    </main>
    
    <!-- Footer component appears on every page -->
    <Footer />
  </div>
</template>

<script>
// Import our shared components
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
  // LEARNING: You could add global state management here with Vuex or Pinia
  // LEARNING: You could add lifecycle hooks like mounted() to fetch global data
}
</script>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* LEARNING: You can add global CSS variables here for theming */
:root {
  --primary-color: #ffcb05;
  --secondary-color: #3d7dca;
  --text-color: #333;
}
</style>
