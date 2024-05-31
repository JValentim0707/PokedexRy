<template>
  <div class="pokemon-card">
    <div class="number-header">#{{pokemonNumber}}</div>
    <div class="pokemon-image">
      <v-img
        max-width="180"
        aspect-ratio="16/9"
        cover
        :src="urlImagePokemon"
      ></v-img>
    </div>
    <div class="pokemon-info">
      <div class="pokemon-name">{{ pokemonName }}</div>
      <div class="pokemon-types">
        <PokemonType v-for="(type, i) in pokemonTypes" :key="i" :textType="type.type.name" :color="pokemonTypeColor[type.type.name.toLowerCase()]"/>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonType from '@/components/PokemonType.vue'


import { getPokemonInfo } from '@/service/pokemons'

export default {
  props: {
    pokemonName: String,
    pokemonInfoUrl: String,
  },

  components: {
    PokemonType
  },

  data() {
    return { 
      pokemonNumber: null,
      pokemonTypes: [],
      colorTypeOne: 'black',
      colorTypeTwo: 'black',

      pokemonTypeColor: {
        normal: '#A4ACAF',
        fire: '#FD7D24',
        water: '#6890F0',
        eletric: '#F8D030',
        grass: '#78C850',
        ice: '#98D8D8',
        fighting: '#C03028',
        poison: '#A040A0',
        ground: '#E0C068',
        flying: '#A890F0',
        pyschic: '#F85888',
        bug: '#A8B820',
        rock: '#B8A038',
        ghost: '#705898',
        dragon: '#7038F8',
        dark: '#705848',
        steel: '#B8B8D0',
        fairy: '#F0B6BC',
        
      }
     }
  },

  computed: {
    urlImagePokemon() {
      return `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${this.pokemonNumber}.png`
    }
  },

  async mounted() {
    const pokemonInfo = await getPokemonInfo(this.pokemonInfoUrl)
    this.pokemonNumber = this.getFormatNumberPokemon(pokemonInfo.id)
    this.pokemonTypes = pokemonInfo.types
    this.getPokemonTypeColor(this.pokemonTypes)
  },

  methods: {
    getFormatNumberPokemon(pokemonId) {
      if (String(pokemonId).length < 3 ) {
        const formatedNumber = pokemonId < 10 ? `00${pokemonId}` : `0${pokemonId}`
        return formatedNumber
      }
      return formatedNumber
    },
    getPokemonTypeColor(types) {
      if (types.length > 1) {
        this.colorTypeOne = this.pokemonTypeColor[types[0].type.name]
        this.colorTypeTwo = this.pokemonTypeColor[types[1].type.name]

        return 
      }

      this.colorTypeOne = this.pokemonTypeColor[types[0].type.name]
      this.colorTypeTwo = this.pokemonTypeColor[types[0].type.name]
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Aclonica&family=Advent+Pro:ital,wght@0,100..900;1,100..900&family=Keania+One&family=Lilita+One&family=Tac+One&family=Tilt+Neon&display=swap');

.pokemon-card {
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  color: #000;
  min-width: 300px;
  width: 25%;
  max-width: 300px;
  height: 16%;
  min-height: 280px;
  max-height: 280px;
  border-radius: 5px;
  font-family: "Keania One", sans-serif;
  font-weight: 400;
  box-shadow: 0px 2px 4px #222222;

  .number-header {
    margin-left: 20px;
    margin-top: 12px;
  }
  .pokemon-image {
    display: flex;
    justify-content: center;
  }
  .pokemon-info {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    .pokemon-types {
      display: flex;
      text-transform: capitalize;
      gap: 10px;
    }

    .pokemon-name {
      text-transform: capitalize;
      font-size: 20px;
      color: v-bind(test);
      background: -webkit-linear-gradient(left, v-bind(colorTypeOne) -2%, v-bind(colorTypeTwo) 30%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
