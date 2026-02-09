import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Create the Vue application instance
// LEARNING: This is where we initialize our Vue 3 application
const app = createApp(App)

// Use the router plugin
// LEARNING: Router allows navigation between different pages/views
app.use(router)

// Mount the app to the DOM element with id="app"
app.mount('#app')
