import axios from "axios";

// configuração da Disney API
const api = axios.create({
  baseURL: "https://api.disneyapi.dev",
});

// configuração da api do Pokemon
const apiPokemon = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});


export { api, apiPokemon };
