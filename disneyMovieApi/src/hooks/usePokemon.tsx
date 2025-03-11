import { useEffect, useState } from "react";
import { apiPokemon } from "../api/api";

// Interface para o Pokémon
interface PokemonList {
  id: string;
  name: string;
  url: string;
  sprites: {
    front_default: string; // URL da imagem
  };
}

// Definindo meu hook personalizado
const usePokemon = () => {
  const [pokemon, setPokemon] = useState<PokemonList[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<JSX.Element | null>(null);

  useEffect(() => {
    // Criando a função assíncrona com o fetch, para fazer a requisição HTTP
    const fetchPokemonList = async () => {
      try {
        //requisição 1  para buscar os pokemons
        const responseApi = await apiPokemon.get("pokemon?limit=10");
        const pokemonList = responseApi.data.results;

        // requisição 2 para buscar detalhes de cada Pokémon
        const pokemonDetails = await Promise.all( //recebendo uma promessa e espera que todas sejam executadas através do Promise.all
          pokemonList.map(async (poke: { url: string }) => { //poke são os parâmetros da lista pokemonList, ou seja, lista de detalhes, e dela estou usando a url 
            const responseDetail = await apiPokemon.get(poke.url);// ao invés de passaro complemento da minha api, passei o endereço que contém a URL onde tem acesso aos detalhes
            const pokeDetails = responseDetail.data;
            return {
              id: pokeDetails.id.toString(),
              name: pokeDetails.name,
              sprites: pokeDetails.sprites,//sprites contém o link para as imagens
            };
          })
        );

        setPokemon(pokemonDetails); // Atualiza o estado com os dados completos dos Pokémon
      } catch (err) {
        console.error(err);
        setError(
          <div className="grid justify-center p-10">
            <h1>Estamos trabalhando para resolver o erro encontrado, volte em breve!</h1>
          </div>
        );
      } finally {
        setLoading(false); // Sempre desativa o loading ao finalizar
      }
    };

    fetchPokemonList();
  }, []); // Garante que a requisição só aconteça quando o componente for montado

  return { pokemon, loading, error };
};

export default usePokemon;
