<template>
  <div class="bg-pokedex">
    <div class="bg-column-side"></div>
    <div class="bg-content">
      <div class="bg-header">
        <v-icon size="60" icon="mdi-pokeball ml-4"></v-icon>
        <span class="ml-4">Pokedex.Ry</span>
      </div>
      <div class="bg-filter">
        <div class="search-container">
          <span class="mt-4 ml-4">Search By Name</span>
          <v-text-field
            class="mt-4 ml-4"
            density="compact"
            variant="outlined"
          ></v-text-field>
        </div>

      </div>
      <!-- <v-infinite-scroll :height="300" :items="allPokemons" @onLoad="loadMorePokemons" mode="manual">
        <template v-for="(item, index) in items" :key="item">
          <div :class="['pa-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
            Item number #{{ item }}
          </div>
        </template>
      </v-infinite-scroll> -->
      <!-- <div class="pokemon-list"> -->
      <v-infinite-scroll :height="300" :items="allPokemons" @load="loadMorePokemons" load-more-text="Load More" mode="manual">
        <div class="pokemon-list">
          <template v-for="(pokemon) in allPokemons" :key="pokemon">
            <PokemonCardVue :pokemonName="pokemon.name" :pokemonInfoUrl="pokemon.url"/>
          </template>
        </div>
      </v-infinite-scroll>
    </div>
    <div class="bg-column-side"></div>
  </div>
</template>

<script>
// Components
import PokemonCardVue from '@/components/PokemonCard.vue'

import { getPokemons } from '@/service/pokemons'

import { ref } from 'vue'

export default {
  name: 'HomePage',
  data() {
    return { 
      allPokemons: [],
      items: []
     }
  },
  components: {
    PokemonCardVue
  },

  async mounted() {
    this.allPokemons = await getPokemons()
  },

  methods: {
    loadMorePokemons({ done }) {
      console.log('tamo aq')
      done('ok')
      // this.allPokemons.push((this.allPokemons.length + 1))
    }
  }
}
</script>


<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aclonica&family=Advent+Pro:ital,wght@0,100..900;1,100..900&family=Lilita+One&family=Tac+One&family=Tilt+Neon&display=swap');

.bg-pokedex {
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url('../assets/background-dex.jpg');
  background-size: cover;
  .bg-column-side {
    width: 20%;
    height: 100%;
    background-color: #222222;
    opacity: 0.4;
  }
  .bg-content {
    background-color: rgba(255, 255, 255, 0.658);
    width: 100%;
    .bg-header {
      display: flex;
      align-items: center;
      width: 100%;
      background-color: #222222;
      height: 90px;
      font-family: "Lilita One", sans-serif;
      font-size: 30px;
    }
    .bg-filter {
      display: flex;
      background-color: white;
      width: 100%;
      height: 240px;
      box-shadow: 0px 5px 10px #222222;
      font-family: "Lilita One", sans-serif;
      color: #222222;
      font-size: 28px;
      .search-container {
        width: 400px;
      }
    }
  }
  .pokemon-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
    overflow-y: auto;
    // flex-wrap: wrap;
    justify-content: center;
    // overflow-y: auto;
    gap: 30px 30px;
    margin-top: 20px;
  }
}

</style>