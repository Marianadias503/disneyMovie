import { useParams } from "react-router-dom";
import useDisneyCharacters from '../hooks/useCharacters';

export default function Details() {
  const { id } = useParams();// uso do useParams para conseguir pegar o id da url
  const { characters, loading, error } = useDisneyCharacters(); 

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  // convertendo o _id para string antes da comparação feita para ver qual personagem tem o mesmo id da url
  // o .find percorreum array e retorna o primeiro elemento quye satisfaz a condição fornecida na função de callback.
  // nessa lógica tem o id da url e do perosnagem, então o id do personagem é convertido para uma string e é feita a comparação
  const character = characters.find((char) => String(char._id) === id);

  if (!character) {
    return <h1>Personagem não encontrado</h1>;
  }

  return (
    <div className="bg-primary min-h-screen p-10 grid place-items-center">
      <h1 className="text-2xl font-bold text-center mt-10">{character.name}</h1>
      <img src={character.imageUrl} alt={character.name} className="w-64 h-auto mb-4 mt-4" />
      <p className="text-center"><strong>Filmes:</strong> {character.films.join(', ')}</p>
    </div>
  );
}
