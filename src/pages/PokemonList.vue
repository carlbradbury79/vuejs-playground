<template>
  <div class="pokemon-list">
    <h1>Pokémon List</h1>
    
    <!-- LEARNING: This is where you could add search/filter controls -->
    <div class="controls">
      <p class="hint">💡 Next step: Add search and filter functionality here</p>
    </div>
    
    <!-- Pokemon grid -->
    <div class="pokemon-grid">
      <!-- LEARNING: Currently using static data, but you can fetch from PokéAPI -->
      <!-- Example API: https://pokeapi.co/api/v2/pokemon?limit=20 -->
      <div 
        v-for="pokemon in pokemonList" 
        :key="pokemon.id"
        class="pokemon-card"
      >
        <div class="pokemon-number">#{{ pokemon.id }}</div>
        <div class="pokemon-image">{{ pokemon.emoji }}</div>
        <h3>{{ pokemon.name }}</h3>
        <div class="pokemon-types">
          <span 
            v-for="type in pokemon.types" 
            :key="type"
            class="type-badge"
            :class="`type-${type}`"
          >
            {{ type }}
          </span>
        </div>
        <!-- LEARNING: Add a click event to navigate to detail page -->
        <!-- <router-link :to="`/pokemon/${pokemon.id}`">View Details</router-link> -->
      </div>
    </div>
    
    <!-- LEARNING: Add pagination controls here -->
    <div class="pagination-hint">
      <p>💡 Add pagination or infinite scroll here when using real API data</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonList',
  data() {
    return {
      // LEARNING: This is component state - currently static data
      pokemonList: [
        { id: 1, name: 'Bulbasaur', emoji: '🌱', types: ['grass', 'poison'] },
        { id: 4, name: 'Charmander', emoji: '🔥', types: ['fire'] },
        { id: 7, name: 'Squirtle', emoji: '💧', types: ['water'] },
        { id: 25, name: 'Pikachu', emoji: '⚡', types: ['electric'] },
        { id: 39, name: 'Jigglypuff', emoji: '🎵', types: ['normal', 'fairy'] },
        { id: 143, name: 'Snorlax', emoji: '😴', types: ['normal'] }
      ],
      // LEARNING: Add more state properties here:
      // - loading: false
      // - error: null
      // - searchQuery: ''
      // - selectedType: null
    }
  },
  
  // LEARNING: Lifecycle hooks - uncomment to use
  // mounted() {
  //   // This runs when the component is added to the page
  //   this.fetchPokemon()
  // },
  
  // LEARNING: Methods for API calls and interactions
  methods: {
    // Example method structure for API calls
    // async fetchPokemon() {
    //   try {
    //     this.loading = true
    //     const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    //     const data = await response.json()
    //     // Process and set the pokemon data
    //     this.pokemonList = data.results
    //   } catch (error) {
    //     this.error = 'Failed to fetch Pokémon'
    //     console.error(error)
    //   } finally {
    //     this.loading = false
    //   }
    // }
  },
  
  // LEARNING: Computed properties for filtered/sorted data
  // computed: {
  //   filteredPokemon() {
  //     return this.pokemonList.filter(pokemon => 
  //       pokemon.name.toLowerCase().includes(this.searchQuery.toLowerCase())
  //     )
  //   }
  // },
  
  // LEARNING: Watchers to react to data changes
  // watch: {
  //   searchQuery(newValue) {
  //     console.log('Search query changed to:', newValue)
  //   }
  // }
}
</script>

<style scoped>
.pokemon-list {
  width: 100%;
}

.pokemon-list h1 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
}

.controls {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.hint,
.pagination-hint p {
  background: #fff3cd;
  border: 1px solid #ffc107;
  padding: 1rem;
  border-radius: 4px;
  color: #856404;
  text-align: center;
  margin: 0;
}

.pagination-hint {
  margin-top: 2rem;
}

.pokemon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.pokemon-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.pokemon-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.pokemon-number {
  font-size: 0.9rem;
  color: #999;
  font-weight: bold;
}

.pokemon-image {
  font-size: 4rem;
  margin: 1rem 0;
}

.pokemon-card h3 {
  color: #2c3e50;
  margin: 0.5rem 0;
  text-transform: capitalize;
}

.pokemon-types {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
}

.type-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
}

/* Type colors - LEARNING: You can expand this with all Pokemon types */
.type-fire { background-color: #F08030; }
.type-water { background-color: #6890F0; }
.type-grass { background-color: #78C850; }
.type-electric { background-color: #F8D030; color: #333; }
.type-poison { background-color: #A040A0; }
.type-normal { background-color: #A8A878; }
.type-fairy { background-color: #EE99AC; }

/* LEARNING: Add loading spinner styles */
/* LEARNING: Add error message styles */
/* LEARNING: Add empty state styles */

@media (max-width: 768px) {
  .pokemon-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }
}
</style>
