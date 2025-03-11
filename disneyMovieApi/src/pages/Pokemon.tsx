import Card from '../components/card';
import usePokemon from '../hooks/usePokemon'

export default function Pokemon() {
    const {pokemon,loading,error} = usePokemon();
    if(loading){
        return(
            <h1>Carregando...</h1>
        )
    } else if (error){
        return error
    }

  return (
    <div className="bg-primary w-full h-full">
    <div className="flex p-8">
        <p className="ml-10 pt-20 text-3xl font-bold">
          Que bom ter você aqui! Acompanhe alguns personagens de Pokemon.
        </p>
      </div>
       <div className="grid grid-cols-3 gap-4 m-0 p-12 ">
              {pokemon.map((poke) => ( 
                <Card key={poke.id}  title={poke.name} image={poke.sprites.front_default} />
              ))}
            </div>
    </div>
  );
}
