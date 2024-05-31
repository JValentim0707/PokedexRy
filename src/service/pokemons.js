import axios from 'axios'

const urlPokemonImage ='https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail'

const getPokemons = async () => {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon')
  return data.results
}

const getPokemonInfo = async (urlPokemon) => {
  const { data } = await axios.get(urlPokemon)
  return data
}

export {
  getPokemons,
  getPokemonInfo,
}