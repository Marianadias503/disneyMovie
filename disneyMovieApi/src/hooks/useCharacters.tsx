// src/hooks/useDisneyCharacters.ts
import { useEffect, useState } from 'react';
import api from '../api/api';
import imgDisney from '../assets/imgDisney.png';

// Criando uma interface para os personagens
interface Character {
  _id: string; 
  url: string;
  name: string;
  films: string[];
  imageUrl: string;
  description?: string;
}

// Definindo meu hook personalizado
const useDisneyCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]); //usando o useState para salvar os dados do personagens, iniciando com um array vazio com o tipagem da interface
  const [loading, setLoading] = useState<boolean>(true); // array para tratar mensagens de erro, iniciando como true 
  const [error, setError] = useState<JSX.Element | null>(null); // array para tratar mensagens de erro, iniciando como null, usei o JSX.Element pois realizei um tratamento personalizado com html 

  //usando o hook useEffect pois preciso de uma resposta imediata assim que a pagina  for carregada 
  useEffect(() => {
    //definindo minha função com o método fetch, função assincrona  
    const fetchCharacters = async () => {
      try {
        const response = await api.get("/character"); // usando apenas 'character' pois a base da url esta definida em 'api'
        console.log(response.data); 
        setCharacters(Array.isArray(response.data.data) ? response.data.data : []); 
        //faz a comparação com o resultado da api em responde para ver se o retorno é uma lista de array
      } catch (err) {
        //tratamento de erro
        console.error(err);
        setError(
          <div className='grid justify-center p-10'>
            <img className='w-48 mb-10 mt-10 ml-32' src={imgDisney} alt="Erro" />
            <h1>Estamos trabalhando para resolver o erro encontrado, volte em breve!</h1>
          </div>
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return { characters, loading, error };
};

export default useDisneyCharacters;
