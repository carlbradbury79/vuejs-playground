import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import PokemonList from '../pages/PokemonList.vue'

// LEARNING: Define your application routes here
// Each route maps a URL path to a component
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pokemon',
    name: 'PokemonList',
    component: PokemonList
  }
  // LEARNING: Add more routes as you expand:
  // {
  //   path: '/pokemon/:id',
  //   name: 'PokemonDetail',
  //   component: () => import('../pages/PokemonDetail.vue'),
  //   props: true  // Pass route params as props
  // },
  // {
  //   path: '/favorites',
  //   name: 'Favorites',
  //   component: () => import('../pages/Favorites.vue')
  // },
  // {
  //   path: '/:pathMatch(.*)*',  // 404 catch-all route
  //   name: 'NotFound',
  //   component: () => import('../pages/NotFound.vue')
  // }
]

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

// LEARNING: You can add navigation guards here
// router.beforeEach((to, from, next) => {
//   // Run code before each route change
//   // Useful for authentication, analytics, etc.
//   console.log('Navigating to:', to.name)
//   next()
// })

export default router
