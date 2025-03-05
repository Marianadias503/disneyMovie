// src/pages/Home.tsx
import React from 'react';
import mickeyHome from '../assets/mickeyHome.png';
import Card from '../components/card';
import { useNavigate } from 'react-router-dom';
import useDisneyCharacters from '../hooks/useCharacters'; 

export default function Home() {
  const navigate = useNavigate();
  const { characters, loading, error } = useDisneyCharacters(); 

  const handleNavigation = () => {
    navigate("/allmovies"); // Caminho da rota para a pagina AllMovies
  };

  if (loading) {
    return <h1>Carregando...</h1>; 
  }
  
  else if (error) {
    return error; // vai carregar a minha mensagem personalizada de erro
  }

  // Exibindo apenas 6 personagens usando o 'slice'
  const limitedCharacters = characters.slice(0, 6); 

  return (
    <div className="bg-primary w-full h-auto">
      <div className="pt-10 flex justify-center items-center gap-10 border">
        <div className="w-2/4 flex flex-col gap-3 p-5">
          <h1 className="font-serif text-4xl text-[#401EFF] font-black">
            Disney's Character List
          </h1>
          <p className="text-white">
            Uma plataforma para acompanhar todos os personagens da Disney, com a descrição de cada um em um único lugar.
            Clique para ver todos os personagens .
          </p>
          <button 
            className="bg-white text-[#401EFF] rounded-2xl w-1/2"
            type="submit" 
            onClick={handleNavigation}
          >
            Lista completa
          </button>
        </div>

        <div className="justify-center">
          <img src={mickeyHome} alt="Mickey" className="w-56" />
        </div>
      </div>

      {/* Renderizando meu componente Card com os 6 personagens limitados */}
      <div className="grid grid-cols-3 gap-4 m-0 p-12">
        {limitedCharacters.map((character) => (
          <Card key={character._id} id={character._id} title={character.name} image={character.imageUrl} />
        ))}
      </div>
    </div>
  );
}
