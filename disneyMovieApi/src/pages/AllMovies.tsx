import imgDisney from '../assets/imgDisney.png';
import Card from '../components/card';
import useDisneyCharacters from '../hooks/useCharacters';

export default function AllMovies() {
  const { characters, loading, error } = useDisneyCharacters(); 
  if (loading) {
    return <h1>Carregando...</h1>; 
  }
  
  else if (error) {
    return error; 
  }


  return (
    <div className="bg-primary w-full h-full">
      <div className="flex p-8">
        <img src={imgDisney} alt="Disney" className="w-44" />
        <p className="ml-10 pt-20 text-3xl font-bold">
          Que bom ter você aqui! Acompanhe todos os personagens do mundo Disney.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 m-0 p-12 ">
        {characters.map((character) => ( 
          <Card key={character._id} id={character._id} title={character.name} image={character.imageUrl} />
        ))}
      </div>
    </div>
  );
}
